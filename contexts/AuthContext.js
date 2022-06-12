import { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appsApi from "../api/api";
import { useRouter } from "next/router";
import Redirect from "../components/Redirect";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import {
  AUTH_TOKEN,
  clearLS,
  DEVICE_ID,
  getDeviceId,
  getLS,
  randomId,
  setLS,
  USER_ID,
} from "../lib/commons";
const TIMEOUT_SECONDS = 600;
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

let timeOut;

const publicUrls = ["/auth/login", "/auth/signup"];
const isPublicRoute = (currentRoute = "") => {
  for (let pUrl of publicUrls) {
    if (currentRoute.startsWith(pUrl)) return true;
  }
  return false;
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function AuthProvider({ children }) {
  const router = useRouter();
  const [loadingUser, setLoadingUser] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggingUserIn, setLoggingUserIn] = useState(false);
  const [userWalletBalance, setUserWalletBalance] = useState(null);
  const [sessionTimedOut, setSessionTimedOut] = useState(false);

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const userDetailsFromLSJsonStr =
      typeof window === "undefined" ? "" : getLS("userDetails");
    const userDetailsFromLS = userDetailsFromLSJsonStr
      ? JSON.parse(userDetailsFromLSJsonStr)
      : {
          userId: "",
          username: "",
          phoneNumber: "",
          name: "",
        };
    setUserDetails(userDetailsFromLS);
    console.log('------------------------  start here  -------------------')
  }, []);

  useEffect(() => {
    setLS("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  function resetTimer() {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setSessionTimedOut(true);
    }, TIMEOUT_SECONDS * 1000);
  }

  useEffect(() => {
    getUserProfile();
    getWalletBalance();
    if (loggedIn) {
      resetTimer();
      document.onmousemove = resetTimer;
      document.onkeyup = resetTimer;
    }
  }, [loggedIn]);

  async function loginMpin({ mpin }) {
    const redirect = router.query.redirect || "/dashboard";
    if (!mpin) {
      notify({
        message: "Please enter mpin",
        isError: true,
      });
      return;
    }
    setLoggingUserIn(true);
    const deviceId = getDeviceId();
    const res = await appsApi.loginWithMpin({ deviceId, mpin });
    if (res) {
      if (res.status === 1) {
        notify({
          message: res.message || "Successfully logged in",
          isError: false,
        });
        setLS(AUTH_TOKEN, res.data.token);
        setLS(USER_ID, res.data.userId);
        setLoggedIn(true);
        setUserDetails({
          ...userDetails,
          userId: res.data.userId,
          username: res.data.username,
          phoneNumber: res.data.mobile,
          name: res.data.name,
        });
        router.push(redirect);
      } else {
        notify({ message: res.message || "Error", isError: true });
      }
    } else {
      notify({ message: "Unknown Error", isError: true });
    }
    setLoggingUserIn(false);
  }
  async function getUserProfile() {
    setLoadingUser(true);
    const id = getLS(USER_ID);
    const res = await appsApi.profileData({ id });
    if (res && res.status === 1) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      setUserDetails({
        ...userDetails,
        userId: "",
        username: "",
        phoneNumber: "",
        name: "",
      });
    }
    setLoadingUser(false);
  }
  async function getWalletBalance() {
    const userId = getLS(USER_ID);
    const res = await appsApi.userWalletBalance({
      userId,
    });
    if (res && res.status === 1 && res.data) {
      setUserWalletBalance(res.data.wallet_balance);
    }
  }
  async function getNotificationCounter() {}
  function notify({ message, isError }) {
    if (isError) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }
  async function logout() {
    clearLS(AUTH_TOKEN);
    setLoggedIn(false);
  }
  async function handleLogout(event) {
    if (event) event.preventDefault();
    await logout();
    setSessionTimedOut(false);
    clearTimeout(timeOut);
    document.onmousemove = null;
    document.onkeyup = null;
    router.push(`/auth/login?redirect=${router.asPath}`);
  }
  const value = {
    notify,
    userWalletBalance,
    loginMpin,
    loggingUserIn,
    logout,
    userDetails,
    getWalletBalance,
  };
  return (
    <AuthContext.Provider value={value}>
      <>
        {loadingUser ? (
          <h1>Loading...</h1>
        ) : loggedIn ? (
          children
        ) : isPublicRoute(router.asPath) ? (
          children
        ) : (
          <Redirect url={`/auth/login?redirect=${router.asPath}`} />
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Dialog
          open={sessionTimedOut}
          // onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Session Expired!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your session expired due to inactivity. Please logout to continue.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogout}>Logout</Button>
          </DialogActions>
        </Dialog>
      </>
    </AuthContext.Provider>
  );
}

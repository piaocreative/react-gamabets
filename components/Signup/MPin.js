import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { AuthTemplate } from "../index";
import setMpinImg from "../../public/assets/set_mpin.png";
import styles from "./auth.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { setLS, AUTH_TOKEN, USER_ID, getDeviceId } from "../../lib/commons";
import appsApi from "../../api/api";
const Mpin = ({ signupData, moveToNextStep, saveSignupData }) => {
  const [mpin, setMpin] = useState("");
  const [mpinConfirm, setMpinConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const { notify } = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!mpin || !mpinConfirm || mpin !== mpinConfirm) {
      notify({
        message: "Please enter Mpin and confirm Mpin",
        isError: true,
      });
      return;
    }
    setLoading(true);
    const deviceId = getDeviceId();
    const res = await appsApi.registerUser({
      deviceId,
      deviceName: "HONOR 8",
      deviceVeriOTP: signupData.otp,
      firebaseId: "",
      mobile: `+${signupData.countrycode}${signupData.mobile}`,
      mpin: mpin,
      name: `${signupData.firstName} ${signupData.lastName}`,
      //   username: "jackthesparrow4",
      //   password: "1234qwer",
    });
    if (res) {
      if (res.status === 1) {
        setLS(AUTH_TOKEN, res.data.token);
        setLS(USER_ID, res.data.userId);
        saveSignupData({ firstName, firstName });
        moveToNextStep(2);
        notify({ message: res.message || "Success", isError: false });
      } else {
        notify({ message: res.message || "Error", isError: true });
      }
    } else {
      notify({ message: "Unknown Error", isError: true });
    }
    setLoading(false);
  };
  const setValue = ({ type, value }) => {
    if (value.length > 4 || isNaN(value) || value.includes(".")) {
      return;
    }
    if (type === "mpin") {
      setMpin(value);
    } else if (type === "mpinConfirm") {
      setMpinConfirm(value);
    }
  };
  return (
    <AuthTemplate
      title="MPIN Registration"
      imageSrc={setMpinImg}
      btnTitle="Submit"
      isContentCenter={false}
      btnOnClick={handleSubmit}
      btnLoading={loading}
      handleBackArrowClick={(event) => {
        event.preventDefault();
        moveToNextStep(3);
      }}
    >
      <Box sx={{ textAlign: "center", marginTop: "18px" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#222222",
            fontWeight: 400,
            paddingBottom: "16px",
          }}
        >
          Set MPIN
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          // component="h5"
          variant="subtitle1"
          sx={{
            color: "#57758F",
          }}
        >
          Please Provide a 4 digit numeric MPIN to protect your account against
          unauthorised access.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", marginBottom: "32px" }}
      >
        <LockOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="enter-mpin"
          label="Enter MPIN"
          variant="standard"
          value={mpin}
          onChange={(e) => setValue({ type: "mpin", value: e.target.value })}
          InputLabelProps={{ className: styles.label }}
          InputProps={{ classes: { input: styles.input } }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <LockOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="confirm-mpin"
          label="Confirm MPIN"
          variant="standard"
          value={mpinConfirm}
          onChange={(e) =>
            setValue({ type: "mpinConfirm", value: e.target.value })
          }
          InputLabelProps={{ className: styles.label }}
          InputProps={{ classes: { input: styles.input } }}
        />
      </Box>
    </AuthTemplate>
  );
};

export default Mpin;

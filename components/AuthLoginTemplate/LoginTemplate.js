import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { ArrowBack } from "@mui/icons-material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import setMpinImg from "../../public/assets/set_mpin.png";
import styles from "./logintemplate.module.css";
import { useAuth } from "../../contexts/AuthContext";
import appsApi from "../../api/api";
import { AUTH_TOKEN, getDeviceId, setLS, USER_ID } from "../../lib/commons";

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        ...sx,
      }}
      {...other}
    />
  );
};

const LoginTemplate = ({ title = "", btnTitle = "", children }) => {
  const [alignment, setAlignment] = useState("mpin");
  const [username, setUsername] = useState("nabin");
  const [password, setPassword] = useState("nabinnabin");
  const [mpin, setMpin] = useState("");
  const { notify, loginMpin, loggingUserIn } = useAuth();
  const router = useRouter();
  console.log({ router });
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleMPinLogin = async () => {
    await loginMpin({ mpin });
  };

  useEffect(() => {
    if (mpin.length === 4) handleMPinLogin();
  }, [mpin]);

  const handleMpinChange = (event) => {
    const value = event.target.value;
    if (value.length > 4 || isNaN(value) || value.includes(".")) {
      return;
    }
    setMpin(value);
  };

  const handleLogin = (event) => {
    if (event) event.preventDefault();
    console.log('alignment : ', alignment);
    if (alignment === "username") handleUsernameLogin();
    if (alignment === "mpin") handleMPinLogin();
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.mainBox}>
        <Item className={styles.headerItem}>
          <Box className={styles.statusHeader} />
        </Item>
        <Item className={styles.navItem}>
          <ArrowBack className={styles.navSection} />
        </Item>
        <Item className={styles.titleItem}>
          <Typography
            component="h5"
            variant="h5"
            className={styles.titleSection}
          >
            {title}
          </Typography>
        </Item>
        <Item className={styles.inputContentItem}>
          <Paper className={styles.paperSection}>
            <div className={styles.textCenter}>
              <Image
                src={setMpinImg}
                alt="Picture of mobile phone"
                width={57} //automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <Box
                className={styles.loginFieldBox}
                sx={{
                  gridAutoRows: `minmax(0%,${
                    alignment === "username" ? "20%" : "40%"
                  }) auto`,
                }}
              >
                {/* This is for username tab, uncomment
                below when needed */}
                {/* <div style={{ gridArea: "toggle" }}>
                  <ToggleButtonGroup
                    fullWidth
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    className={styles.toggleButton}
                  >
                    <ToggleButton
                      value="username"
                      classes={{
                        selected: styles.optionSelected,
                        root: styles.root,
                      }}
                      sx={{ border: "none" }}
                    >
                      Username
                    </ToggleButton>
                    <ToggleButton
                      value="mpin"
                      classes={{
                        selected: styles.optionSelected,
                        root: styles.root,
                      }}
                    >
                      MPIN
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div> */}
                <div style={{ gridArea: "inputField" }}>
                  {alignment === "username" && (
                    <>
                      {" "}
                      <Box
                        className={styles.withImageInput}
                        sx={{ marginBottom: "21px" }}
                      >
                        <PermIdentityOutlinedIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          fullWidth
                          id="enter-username"
                          label="Enter Usename"
                          variant="standard"
                          InputLabelProps={{ className: styles.label }}
                          InputProps={{ classes: { input: styles.input } }}
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Box>
                      <Box className={styles.withImageInput}>
                        <PermIdentityOutlinedIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          fullWidth
                          id="enter-password"
                          label="Enter password"
                          variant="standard"
                          InputLabelProps={{ className: styles.label }}
                          InputProps={{ classes: { input: styles.input } }}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Box>
                      <Box>
                        <Button
                          disableFocusRipple
                          disableRipple
                          fullWidth
                          variant="onlyText"
                        >
                          Forgot Password?
                        </Button>
                      </Box>
                    </>
                  )}
                  {alignment === "mpin" && (
                    <>
                      <Box className={styles.withImageInput}>
                        <LockOutlinedIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          fullWidth
                          id="enter-mpin"
                          label="Enter MPIN"
                          variant="standard"
                          InputLabelProps={{ className: styles.label }}
                          InputProps={{ classes: { input: styles.input } }}
                          value={mpin}
                          onChange={handleMpinChange}
                        />
                      </Box>
                      <Box>
                        <Button
                          disableFocusRipple
                          disableRipple
                          fullWidth
                          variant="onlyText"
                        >
                          Forgot MPIN?
                        </Button>
                      </Box>
                    </>
                  )}
                </div>
              </Box>
            </div>

            <Button
              variant="brand"
              fullWidth
              startIcon={<ArrowForwardIcon />}
              onClick={handleLogin}
              disabled={loggingUserIn}
              // onClick={handleBtnClick}
              // disabled={ }
            >
              {/* {btnLoading ? "Loading..." : btnTitle} */}
              {loggingUserIn ? "Loading..." : btnTitle}
            </Button>
          </Paper>
        </Item>
      </Box>
    </Container>
  );
};

export { LoginTemplate };

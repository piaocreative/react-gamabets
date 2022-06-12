import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { AuthTemplate } from "../index";
import createProfile from "../../public/assets/create_profile.png";
import styles from "./auth.module.css";

import { useAuth } from "../../contexts/AuthContext";

const EnterPersonalDetails = ({
  moveToNextStep,
  saveSignupData,
  signupData,
}) => {
  const { notify } = useAuth();
  const handleNext = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      notify({
        message: "Please enter first name and last name",
        isError: true,
      });
      return;
    }
    saveSignupData({ firstName, lastName });
    moveToNextStep(4);
    return;
  };
  const [firstName, setFirstName] = useState(signupData.firstName);
  const [lastName, setLastName] = useState(signupData.lastName);
  return (
    <AuthTemplate
      title="Creat Profile"
      imageSrc={createProfile}
      btnTitle="Next"
      btnOnClick={handleNext}
      handleBackArrowClick={(event) => {
        event.preventDefault();
        moveToNextStep(2);
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "32px",
          marginTop: "32px",
        }}
      >
        <PermIdentityOutlinedIcon
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
        />
        <TextField
          fullWidth
          id="first-name"
          label="First name"
          variant="standard"
          InputLabelProps={{ className: styles.label }}
          InputProps={{ classes: { input: styles.input } }}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PermIdentityOutlinedIcon
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
        />
        <TextField
          fullWidth
          id="last-name"
          label="Last name"
          variant="standard"
          InputLabelProps={{ className: styles.label }}
          InputProps={{ classes: { input: styles.input } }}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </Box>
    </AuthTemplate>
  );
};

export default EnterPersonalDetails;

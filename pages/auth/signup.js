import { useState } from "react";

import EnterNumber from "../../components/Signup/EnterNumber";
import EnterOtp from "../../components/Signup/EnterOtp";
import EnterPersonalDetails from "../../components/Signup/EnterPersonalDetails";
import Mpin from "../../components/Signup/MPin";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [signupData, setSignupData] = useState({
    countrycode: "61",
    mobile: "",
    otp: "",
    firstName: "",
    lastName: "",
    mpin: "",
  });
  const moveToNextStep = (newStep) => setStep(newStep);
  const saveSignupData = ({
    mobile,
    otp,
    firstName,
    lastName,
    countrycode,
  }) => {
    const temp = { ...signupData };
    if (countrycode) temp.countrycode = countrycode;
    if (mobile) temp.mobile = mobile;
    if (otp) temp.otp = otp;
    if (firstName) temp.firstName = firstName;
    if (lastName) temp.lastName = lastName;
    setSignupData(temp);
  };

  if (step === 1) {
    return (
      <EnterNumber
        signupData={signupData}
        moveToNextStep={moveToNextStep}
        saveSignupData={saveSignupData}
      />
    );
  }
  if (step === 2) {
    return (
      <EnterOtp
        signupData={signupData}
        moveToNextStep={moveToNextStep}
        saveSignupData={saveSignupData}
      />
    );
  }
  if (step === 3) {
    return (
      <EnterPersonalDetails
        signupData={signupData}
        moveToNextStep={moveToNextStep}
        saveSignupData={saveSignupData}
      />
    );
  }
  if (step === 4) {
    return (
      <Mpin
        signupData={signupData}
        moveToNextStep={moveToNextStep}
        saveSignupData={saveSignupData}
      />
    );
  }
};

export default Signup;

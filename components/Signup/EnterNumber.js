import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { AuthTemplate } from "../../components";
import { COUNTRY_CODE } from "../../src/countryCode";

import styles from "./auth.module.css";
import appsApi from "../../api/api";
import { useAuth } from "../../contexts/AuthContext";

const formatMobile = (str = "") => {
  let result = "";
  if (str.startsWith("0")) {
    result = str.substring(1);
    return result;
  } else {
    return str;
  }
};

const EnterNumber = ({ moveToNextStep, saveSignupData, signupData }) => {
  const [countryCode, setCountryCode] = useState(
    signupData.countrycode
      ? COUNTRY_CODE.find((c) => signupData.countrycode == c.phone)
      : COUNTRY_CODE[0]
  );
  const [mobile, setMobile] = useState(signupData.mobile);
  const [loading, setLoading] = useState(false);
  const { notify } = useAuth();
  const handleCountryCodeChange = (event, codeValue, c, d, e) => {
    const { value } = event.target;
    setCountryCode(value);
  };
  const router = useRouter();

  const myLoader = ({ src, width, quality }) => {
    return `https://flagcdn.com/w40/${src}?w=${width}&q=${quality || 75}`;
  };

  const onClick = async (event) => {
    if (event) event.preventDefault();
    if (!mobile || !countryCode) {
      notify({
        message: "Please select country and enter mobile",
        isError: true,
      });
      return;
    }
    setLoading(true);
    let completeMobile = `+${countryCode.phone}${formatMobile(mobile)}`;

    const res = await appsApi.getOtp({ mobile: completeMobile });
    if (res) {
      if (res.status === 1) {
        saveSignupData({ countrycode: countryCode.phone, mobile });
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

  return (
    <AuthTemplate
      title="Enter your number"
      btnTitle="Send OTP"
      btnOnClick={onClick}
      btnLoading={loading}
    >
      <Box
        sx={{ display: "flex", alignItems: "flex-end", marginBottom: "53px" }}
      >
        {/* <img
        loading="lazy"
        width="20"
        src={`https://flagcdn.com/w40/${countryCode.code.toLowerCase()}.png 2x`}
        srcSet={`https://flagcdn.com/w40/${countryCode.code.toLowerCase()}.png 2x`}
        alt={`Flag of ${countryCode.label}`}
        sx={{ color: 'action.active', mr: 1, my: 0.5 }}
      /> */}
        <Image
          loader={myLoader}
          src={`${countryCode.code.toLowerCase()}.png`}
          alt={`Flag of ${countryCode.label}`}
          width={38} //automatically provided
          height={25} //automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <Select
          fullWidth
          labelId="select-country-code-label"
          id="select-country-code"
          variant="standard"
          value={countryCode}
          onChange={handleCountryCodeChange}
          label="Age"
          onOpen={(a) => console.log("ON OPEN SELECT:", a)}
          sx={{ ml: 2 }}
        >
          {COUNTRY_CODE.map((country) => (
            <MenuItem key={country.label} value={country}>
              +{country.phone} ({country.label})
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AdUnitsOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="enter-your-mobile-number"
          label="Enter your mobile number"
          variant="standard"
          InputLabelProps={{ className: styles.label }}
          InputProps={{ classes: { input: styles.phoneInput } }}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </Box>
    </AuthTemplate>
  );
};

export default EnterNumber;

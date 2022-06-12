import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NameInfo = ({ displayText, providerName, providerResult }) => {
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "13px", lineHeight: "1.25", color: "#000000" }}
      >
        {providerName}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "12px", lineHeight: "1.25", color: "#000000" }}
      >
        {providerResult}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "7px", lineHeight: "1", color: "#CE0000" }}
      >
        {displayText}
      </Typography>
    </Box>
  );
};

export { NameInfo };

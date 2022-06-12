import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { BidTime } from "./BidTime";
import { NameInfo } from "./NameInfo";
import { useRouter } from "next/router";

const Dash = ({
  providerName,
  providerResult,
  resultStatus,
  btnColor,
  bgColor,
  OpenBidTime,
  CloseBidTime,
  OpenBidResultTime,
  CloseBidResultTime,
  isClosed,
  providerId,
  gameDay,
  displayText,
  colorCode,
}) => {
  const theme = useTheme();
  const router = useRouter();
  const handleBtnClick = (event) => {
    if (event) event.preventDefault();
    if (!OpenBidTime || !CloseBidTime) {
      console.log(
        "This Game Is Not Available To Play For Now, Please Try Again Later"
      );
      return;
    }
    router.push(`/providers/${providerId}/${providerName}`);
  };
  return (
    <Card
      elevation={6}
      sx={{
        display: "flex",
        borderRadius: "10px",
        backgroundColor: bgColor,
        marginBottom: "1rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          //   padding: "23px 9px 12px 9px",
          padding: "16px 0",
          gridTemplateAreas: `"game time play"`,
          gridTemplateColumns: "auto auto auto auto",
          //   alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="previous" sx={{ padding: 0 }}>
            <InfoOutlinedIcon />
          </IconButton>
          <NameInfo
            displayText={displayText}
            providerName={providerName}
            providerResult={providerResult}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BidTime CloseBidTime={CloseBidTime} OpenBidTime={OpenBidTime} />
        </Box>
        <IconButton onClick={handleBtnClick}>
          <Box
            sx={{
              backgroundColor: "#F64401",
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <PlayArrowIcon
              sx={{
                backgroundColor: "white",
                borderRadius: "25px",
                padding: "0",
                fontSize: "25px",
                color: "#F64401",
                alignSelf: "center",
              }}
            />
          </Box>
        </IconButton>
      </Box>
    </Card>
  );
};

export { Dash };

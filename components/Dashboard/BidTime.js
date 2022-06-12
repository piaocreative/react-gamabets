import React from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import bidClock from "../../public/assets/clock.png";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const BidTime = ({ OpenBidTime, CloseBidTime }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box style={{ marginRight: "5px", display: "flex" }}>
        <Image
          quality={100}
          src={bidClock}
          loader={myLoader}
          alt="Picture of Play Button"
          width={18} //automatically provided
          height={18} //automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Box>

      <Box>
        <Box style={{ display: "flex" }}>
          <Typography
            component="h6"
            variant="caption"
            sx={{ fontSize: "9px", color: "#96ADC2" }}
            // className={styles.titleSection}
          >
            Open Bids:
          </Typography>
          <Typography
            component="h6"
            variant="caption"
            sx={{ fontSize: "9px", color: "#059E00" }}
            // className={styles.titleSection}
          >
            {" "}
            {OpenBidTime}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <Typography
            component="h6"
            variant="caption"
            sx={{ fontSize: "9px", color: "#96ADC2" }}
            // className={styles.titleSection}
          >
            Close Bids:
          </Typography>
          <Typography
            component="h6"
            variant="caption"
            sx={{ fontSize: "9px", color: "#DF0307" }}
            // className={styles.titleSection}
          >
            {" "}
            {CloseBidTime}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { BidTime };

import * as React from "react";
import Image from "next/image";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import gamabetslogo from "../../public/assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const AppNavBar = () => {
  const { userWalletBalance } = useAuth();
  console.log("AppNavBar", typeof userWalletBalance);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ paddingLeft: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                padding: "12px 15px 11px 25px",
                borderRadius: "0 20px 20px 0",
                boxShadow: "0px 3px 8px #0000001F",
                marginRight: "8px",
                lineHeight: "11px",
              }}
            >
              <MenuIcon color="primary" fontSize="16px" />
            </div>
            <Image
              quality={100}
              src={gamabetslogo}
              loader={myLoader}
              alt="Picture of Play Button"
              width={149} //automatically provided
              height={30} //automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge
                badgeContent="+"
                color="primary"
                variant="string"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                // sx={{ minWidth: '13px', height: '13px', fontSize: '6px', lineHeight: '6px' }} // implement in anchorposition
              >
                <AccountBalanceWalletIcon />
              </Badge>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "9px",
                  lineHeight: "9px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                {typeof userWalletBalance === "number"
                  ? "₹ " + userWalletBalance
                  : ""}
              </Typography>
            </Box>

            <Badge
              badgeContent="5"
              color="primary"
              variant="string"
              // sx={{ minWidth: '13px', height: '13px', fontSize: '6px', lineHeight: '6px' }} // implement in anchorposition
            >
              <NotificationsNoneIcon />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

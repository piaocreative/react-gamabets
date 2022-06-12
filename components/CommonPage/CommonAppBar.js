import * as React from "react";
import Image from "next/image";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRouter } from "next/router";

import gamabetslogo from "../../public/assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { displayBalance } from "../../lib/commons";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const CommonAppBar = (props) => {
  const { title, hasActions = false } = props;
  const { userWalletBalance } = useAuth();
  const router = useRouter();
  const handleBackBtn = (event) => {
    if (event) event.preventDefault();
    router.back();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ paddingTop: "4px", paddingBottom: "12px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleBackBtn}>
              <ChevronLeftIcon sx={{ color: "#fff" }} />
            </IconButton>

            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", lineHeight: "24px", color: "#fff" }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {hasActions && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletIcon />
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "12px", lineHeight: "12px", color: "#fff" }}
                >
                  {displayBalance(userWalletBalance)}
                </Typography>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";

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
import Card from "@mui/material/Card";
import CasinoIcon from "@mui/icons-material/Casino";
import SvgIcon from "@mui/material/SvgIcon";

import { trashIcon } from "../../src/customIcons";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const useStyles = makeStyles((theme) => ({
  card: {
    display: "grid",
    borderRadius: "8px",
    boxShadow: theme.shadows[3],
    padding: "14px 28px 13px 25px",
    gridTemplateColumns: "minmax(0,100%) minmax(0,51px)",
    marginBottom: "5px",
  },
}));

export const SinglePanaGameList = ({ bidList, removeBid }) => {
  const classes = useStyles();
  const hasGameList = !!bidList.length;
  if (!hasGameList) {
    return false;
  }
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto minmax(0,51px)",
          marginTop: "31px",
          paddingLeft: "14px",
          paddingRight: "28px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "19px",
            color: "#0E1830",
            marginBottom: "10px",
          }}
        >
          Digit
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "19px",
            color: "#0E1830",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Point
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "19px",
            color: "#0E1830",
            marginBottom: "10px",
            textAlign: "right",
          }}
        >
          GameType
        </Typography>
      </Box>
      {bidList.map((indvGame) => (
        <Card elevation={0} className={classes.card} key={indvGame.guid}>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "14px",
                lineHeight: "1",
                color: "#222222",
                fontWeight: "300",
                flex: "33.3%",
              }}
            >
              {indvGame.digits}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "14px",
                lineHeight: "1",
                color: "#222222",
                fontWeight: "300",
                flex: "33.3%",
              }}
            >
              {indvGame.points}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "14px",
                lineHeight: "1",
                flex: "33.3%",
                textAlign: "end",
                color: (theme) =>
                  indvGame.gameSession === "OPEN"
                    ? theme.palette.singlePana.open.main
                    : theme.palette.singlePana.close.main,
                fontWeight: "300",
              }}
            >
              {indvGame.gameSession}
            </Typography>
          </Box>
          <Box
            sx={{ textAlign: "right", cursor: "pointer" }}
            onClick={() => {
              if (removeBid) removeBid(indvGame.guid);
            }}
          >
            <SvgIcon component={() => trashIcon} />
          </Box>
        </Card>
      ))}
    </Box>
  );
};
SinglePanaGameList.defaultProps = {
  title: "Single Digits",
  color: "orange",
};

SinglePanaGameList.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

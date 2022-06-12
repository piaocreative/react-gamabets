import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
// import { styled, alpha } from '@mui/material/styles';

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
import gamabetslogo from "../../public/assets/logo.png";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
function hexToRGBA(hex, opacity) {
  const res = hexToRgb(hex);
  if (!res) return hex;
  const { r, g, b } = res;
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  return rgba;
}

const useStyles = makeStyles((theme) => ({
  cardBgColor: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'rgba(246, 68, 1, 0.15)',
    backgroundColor: (props) => hexToRGBA(props.color, 0.15),
    borderRadius: "10px",
    width: "160px",
    height: "150px",
    cursor: "pointer",
  },
  iconBgColor: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: (props) => {
      return hexToRGBA(props.color, 0.3);
      // return theme.palette.gameCard[props.color].opacity30;
    },
    // opacity: 0.3,
    // padding: "12px 15px 11px 25px",
    borderRadius: "50%",
    height: "74px",
    width: "74px",
    marginBottom: "11px",
  },
  iconColor: {
    color: (props) => `${hexToRGBA(props.color, 0.9)}`,
  },
  underlineColor: {
    position: "absolute",
    bottom: 0,
    height: "4px",
    width: "42px",
    backgroundColor: (props) => `${hexToRGBA(props.color, 0.9)}`,
  },
  // },
}));

export const GameCard = (props) => {
  const classes = useStyles(props);
  const { title = "Single Digits", iconUrl, color = "orange" } = props;
  return (
    <Card elevation={0} className={classes.cardBgColor}>
      <Box className={classes.iconBgColor}>
        <img src={iconUrl} style={{ height: "3rem" }} />
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "14px",
            lineHeight: "1",
            color: "#222222",
            fontWeight: "300",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box className={classes.underlineColor} />
    </Card>
  );
};
GameCard.defaultProps = {
  title: "Single Digits",
  color: "orange",
};

GameCard.propTypes = {
  title: PropTypes.string,
  CustomIcon: PropTypes.object.isRequired,
  color: PropTypes.string,
};

import * as React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SvgIcon from "@mui/material/SvgIcon";
import { whiteCloseIcon, thumbsUpIcon } from "../../src/customIcons";

export const SinglePanaSubmission = ({
  open,
  handleClose,
  isSuccess = true,
  message = "",
}) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="game-custom-modal"
        open={open}
        PaperProps={{
          sx: {
            position: "relative",
            borderRadius: "21px",
            width: "100%",
            padding: "85px 32px 50px 33px",
            margin: "14px",
            textAlign: "center",
            justifyContent: "center",
            overflow: "visible",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-49px",
            display: "flex",
            justifyContent: "center",
            width: "99px",
            height: "99px",
            borderRadius: "50px",
            alignItems: "center",
            color: "#fff",
            backgroundColor: (theme) =>
              isSuccess
                ? theme.palette.singlePana.open.main
                : theme.palette.singlePana.close.main,
          }}
        >
          <SvgIcon
            component={() => (isSuccess ? thumbsUpIcon : whiteCloseIcon)}
            inheritViewBox
          ></SvgIcon>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "26px",
              lineHeight: "35px",
              fontWeight: 300,
              color: "#222",
              marginBottom: "25px",
            }}
          >
            {isSuccess ? "Good Luck!" : "Nope!"}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 300,
              color: (theme) =>
                isSuccess
                  ? theme.palette.singlePana.open.main
                  : theme.palette.singlePana.close.main,
              marginBottom: "37px",
            }}
          >
            {message}
          </Typography>
        </Box>
        <Button
          variant="circular"
          onClick={() => {
            handleClose();
          }}
          sx={{
            width: "167px",
            height: "54px",
            fontSize: "18px",
            lineHeight: "24px",
            backgroundColor: (theme) =>
              isSuccess
                ? theme.palette.singlePana.open.main
                : theme.palette.singlePana.close.main,
          }}
        >
          ok
        </Button>
      </Dialog>
    </div>
  );
};

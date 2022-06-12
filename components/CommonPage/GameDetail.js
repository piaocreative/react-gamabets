import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import SvgIcon from "@mui/material/SvgIcon";

import { closeIcon } from "../../src/customIcons";
import { displayBalance } from "../../lib/commons";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "grid",
    boxShadow: theme.shadows[3],
    padding: "14px 28px 13px 25px",
    gridTemplateColumns: "minmax(0,100%) minmax(0,100%) minmax(0,100%)",
    marginBottom: "5px",
  },
}));

export const GameDetail = ({
  open,
  handleClose,
  title = "Select Game Type",
  gameDetailData = [],
  walletBalance = 0,
  totalBidCount,
  totalBidPoints,
  handleSubmit,
  btnLoading,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="game-detail-modal"
      open={open}
      PaperProps={{
        sx: { borderRadius: "21px", margin: "14px", width: "100%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "25px 23px 18px 22px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", lineHeight: "24px", color: "#222222" }}
        >
          {title}
        </Typography>
        {handleClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              padding: 0,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <SvgIcon component={() => closeIcon} inheritViewBox></SvgIcon>
          </IconButton>
        ) : null}
      </Box>
      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            paddingLeft: "28px",
            paddingRight: "23px",
            marginBottom: "18px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", lineHeight: "19px", color: "#0E1830" }}
          >
            Digit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "19px",
              color: "#0E1830",
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
              textAlign: "right",
            }}
          >
            Game Type
          </Typography>
        </Box>
        {gameDetailData.map((indvGame, index) => (
          <Card
            elevation={0}
            className={classes.card}
            key={indvGame.point + index}
          >
            {/* <Box sx={{ display: 'flex' }}> */}
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
                textAlign: "center",
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
            {/* </Box> */}
          </Card>
        ))}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            margin: "18px 25px 18px 29px",
          }}
        >
          <Box sx={{ marginRight: "12px" }}>
            <Box sx={{ marginBottom: "14px" }}>
              <Typography
                color="primary"
                sx={{
                  fontSize: "18px",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                {totalBidCount}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                Total Bids
              </Typography>
            </Box>
            <Box>
              <Typography
                color="primary"
                sx={{
                  fontSize: "18px",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                {displayBalance(walletBalance)}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                Wallet Before Deduction
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            light
            sx={{ height: "99px" }}
          />
          <Box sx={{ marginLeft: "29px" }}>
            <Box sx={{ marginBottom: "14px" }}>
              <Typography
                color="primary"
                sx={{
                  fontSize: "18px",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                {totalBidPoints}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                Total Bid Amount
              </Typography>
            </Box>
            <Box>
              <Typography
                color="primary"
                sx={{
                  fontSize: "18px",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                {displayBalance(walletBalance - totalBidPoints)}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                Wallet After Deduction
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
            marginLeft: "22px",
            marginRight: "21px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", lineHeight: "16px", color: "#333" }}
          >
            Note:
          </Typography>
          <Typography
            color="primary"
            sx={{ fontSize: "14px", lineHeight: "16px", fontWeight: 300 }}
          >
            {" "}
            Bid once played will not be cancelled
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "22px",
            marginRight: "21px",
            marginBottom: "31px",
          }}
        >
          <Button
            variant="circular"
            onClick={(e) => handleSubmit(e)}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              width: "146px",
              height: "47px",
              fontSize: "16px",
              lineHeight: "21px",
            }}
            disabled={btnLoading}
          >
            {btnLoading ? "Loading..." : "Submit"}
          </Button>
          <Button
            variant="circular"
            onClick={() => handleClose()}
            sx={{
              border: "1px solid",
              borderColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.main,
              width: "146px",
              height: "47px",
              fontSize: "16px",
              lineHeight: "21px",
            }}
          >
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

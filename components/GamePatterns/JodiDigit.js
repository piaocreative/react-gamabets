import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  CommonHeaderNav,
  CommonDialog,
  SinglePanaSubmission,
  SinglePanaGameList,
  GameDetail,
} from "..";
import { calendarIcon, downIcon } from "../../src/customIcons";
import appsApi from "../../api/api";
import { v4 as uuid } from "uuid";
import { useAuth } from "../../contexts/AuthContext";
import { getLS, titleCase, USER_ID } from "../../lib/commons";

const JodiDigit = ({
  providerId,
  providerName,
  gameTypeName = "Jodi Digit",
}) => {
  const [openDateSelect, setOpenDateSelect] = useState(false);
  const [openSubmission, setOpenSubmission] = useState(false);
  const [openGameDetail, setOpenGameDetail] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [selectedGameDate, setSelectedGameDate] = useState(null);
  const [gameDateList, setGameDateList] = useState([]);

  const [gameTypeList, setGameTypeList] = useState({});
  const [gameTypeKey, setGameTypeKey] = useState("");

  const [bidDigit, setBidDigit] = useState("");
  const [bidPoints, setBidPoints] = useState("");

  const [bidList, setBidList] = useState([]);
  const [gameIds, setGameIds] = useState([]);

  const [submittingBid, setSubmittingBid] = useState(false);

  const { userWalletBalance, getWalletBalance, userDetails } = useAuth();

  const getGameDates = async () => {
    const res = await appsApi.getDayGameBids({ providerId });
    if (res && res.status === 1 && res.date) {
      setGameDateList(res.date);
      const firstOpen = res.date.find((d) => [1, 2].includes(d.status));
      if (firstOpen) setSelectedGameDate(firstOpen);
    }
  };

  const resetBid = () => {
    setGameTypeKey("");
    setBidDigit("");
    setBidPoints("");
    setBidList([]);
  };

  const getGameSession = async () => {
    if (!selectedGameDate || !selectedGameDate.dayname) return;
    const res = await appsApi.getDaySession({
      providerId,
      gameDay: selectedGameDate.dayname,
    });
    if (res && res.status === 1 && res.data) {
      const temp = {};
      if (res.data.OpenSession.toUpperCase() === "OPEN") {
        temp.OPEN = "OPEN";
      }
      if (res.data.CloseSession.toUpperCase() === "OPEN") {
        temp.CLOSE = "CLOSE";
      }
      setGameTypeList(temp);
      if (
        res.data.OpenSession.toUpperCase() === "OPEN" &&
        res.data.CloseSession.toUpperCase() === "OPEN"
      ) {
        setGameTypeKey("OPEN");
      } else {
        setGameTypeKey("");
      }
    } else {
      setGameTypeKey("");
    }
  };

  useEffect(() => {
    resetBid();
    getGameSession();
  }, [selectedGameDate]);

  const getGameIds = async () => {
    const res = await appsApi.dashboardGameID();
    if (res && res.status === 1 && res.gameTypes) {
      setGameIds([...res.gameTypes]);
    }
  };

  useEffect(() => {
    getGameDates();
    getGameIds();
  }, []);
  const totalBidCount = bidList.length;
  const totalBidPoints = bidList.reduce(
    (a, b) => a + Number.parseFloat(b.points),
    0
  );
  const startSubmittingBids = (event) => {
    if (event) event.preventDefault();
    if (!bidList || bidList.length === 0) return;
    setOpenGameDetail(true);
  };

  const submitBids = async (event) => {
    if (event) event.preventDefault();
    if (!bidList || bidList.length === 0) return;

    setSubmittingBid(true);
    setErrorMessage("");
    setSuccessMessage("");
    setOpenGameDetail(true);

    const userId = getLS(USER_ID);

    const payload = {
      userId,
      bidSum: totalBidPoints,
      providerId: providerId,
      gameDate: selectedGameDate.date,
      gameSession: titleCase(gameTypeKey),
      bidData: bidList.map((b) => ({
        userId,
        providerId: providerId,
        gameTypeId: b.gameTypeId,
        providerName: providerName,
        gameTypeName: b.gameType,
        gameTypePrice: b.gameTypePrice.toFixed(2),
        userName: userDetails.username,
        mobileNumber: userDetails.phoneNumber,
        bidDigit: b.digits,
        biddingPoints: b.points,
        gameSession: titleCase(b.gameSession),
        winStatus: 0,
        gameWinPoints: "0",
        gameDate: b.gameDate,
        updatedAt: "--:--:----",
        createdAt: new Date().toLocaleString(),
        dateStamp: new Date().getTime(),
        group_key: 1,
        gamePatternName: b.gameType,
        gamePatternId: b.gameTypeId,
      })),
    };

    const res = await appsApi.submitDashboardBid(payload);
    if (!res) {
      setErrorMessage("Unknown error");
      setOpenSubmission(true);
    } else if (res.status === 1) {
      setSuccessMessage(res.message);
      setOpenSubmission(true);
      setOpenGameDetail(false);
      getWalletBalance();
      resetBid();
    } else {
      setErrorMessage(res.message);
      setOpenSubmission(true);
    }
    setSubmittingBid(false);
  };

  const createBid = async (event) => {
    if (event) event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    let msg = "";

    if (!gameTypeKey) {
      msg = "Please Select Game Session!!!";
    } else if (!bidDigit) {
      msg = "Please Enter Digit!!!";
    } else if (bidDigit.length < 2) {
      msg = "Please Enter Jodi Digits!!!";
    } else if (!bidPoints) {
      msg = "Please Enter Point!!!";
    } else {
      const bidDigitNum = Number.parseInt(bidDigit);
      const bidPointsNum = Number.parseFloat(bidPoints);
      if (bidPointsNum < 5 || bidPointsNum > 10000) {
        msg = "Note : Bid Point must range between ₹5 - ₹10,000!!!";
      } else if (bidPointsNum > userWalletBalance) {
        msg = "You Don't Have Required Bid Amount. Please Add Fund!!!";
      }
    }
    if (msg) {
      console.log({ msg });
      setErrorMessage(msg);
      setOpenSubmission(true);
      return;
    }
    const gameIdDetails = gameIds.find((gi) => gi.gameName === gameTypeName);
    if (!gameIdDetails) {
      console.error("no game id details");
      return;
    }
    setBidList([
      ...bidList,
      {
        digits: bidDigit,
        gameDate: selectedGameDate.date,
        gameType: gameIdDetails.gameName,
        gameTypeId: gameIdDetails._id,
        gameTypePrice: gameIdDetails.gamePrice,
        gameSession: gameTypeKey,
        points: bidPoints,
        guid: uuid(),
      },
    ]);
    setBidDigit("");
    setBidPoints("");
  };

  const handleOpenDateSelect = () => {
    setOpenDateSelect(true);
  };

  const handlCloseDateSelect = () => {
    setOpenDateSelect(false);
  };

  const handlCloseSubmission = () => {
    setOpenSubmission(false);
  };

  const handlCloseGameDetail = () => {
    setOpenGameDetail(false);
  };

  const setNumValue = (key, value) => {
    if (isNaN(value) || value.includes(".")) return;
    if (key === "bidDigit" && value.length > 2) return;
    if (key === "bidDigit") {
      setBidDigit(value);
    } else if (key === "bidPoints") {
      setBidPoints(value);
    }
  };

  const removeBid = (guid) => {
    const listWithoutThisGuid = bidList.filter((b) => b.guid !== guid);
    setBidList([...listWithoutThisGuid]);
  };

  return (
    <div>
      <CommonHeaderNav
        title={`${providerName} - ${gameTypeName} DASHBOARD`}
        hasActions
      />
      <SinglePanaSubmission
        isSuccess={!!successMessage}
        open={openSubmission}
        message={successMessage ? successMessage : errorMessage}
        handleClose={handlCloseSubmission}
      />
      <CommonDialog
        title="Select Game Date"
        open={openDateSelect}
        handleClose={handlCloseDateSelect}
      >
        <Grid container spacing={2}>
          {gameDateList.map((gd) => (
            <Grid
              item
              xs={12}
              key={gd.date}
              sx={{
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                if (gd.gameSession === "null") return;
                setSelectedGameDate(gd);
                handlCloseDateSelect();
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "7px 7px 7px 12px",
                  border: "1px solid black",
                  borderRadius: "8px",
                  borderColor: (theme) =>
                    gd.gameSession === "Open"
                      ? theme.palette.singlePana.open.main
                      : theme.palette.singlePana.close.main,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#222",
                      marginBottom: "2px",
                    }}
                  >
                    {gd.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "19px",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    {gd.dayname}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#222",
                      marginRight: "19px",
                      color: (theme) =>
                        gd.gameSession === "Open"
                          ? theme.palette.singlePana.open.main
                          : theme.palette.singlePana.close.main,
                    }}
                  >
                    {gd.gameSession === "null"
                      ? "Betting closed"
                      : gd.gameSession}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CommonDialog>
      <GameDetail
        title={`${gameTypeName} ${selectedGameDate ? selectedGameDate.date : ""
          }`}
        gameDetailData={bidList}
        open={openGameDetail}
        handleClose={handlCloseGameDetail}
        walletBalance={userWalletBalance}
        totalBidPoints={totalBidPoints}
        totalBidCount={totalBidCount}
        handleSubmit={submitBids}
        btnLoading={submittingBid}
      />
      <Box sx={{ padding: "16px" }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="pickup-date"
              // label=""
              value={selectedGameDate ? selectedGameDate.date : ""}
              placeholder="Pickup Date"
              onClick={handleOpenDateSelect}
              InputProps={{
                sx: {
                  borderRadius: "17px",
                  borderColor: "#DDDDDD",
                  paddingRight: "10px",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle pickup date"
                      // onClick={handleOpenAttachment}
                      //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ marginRight: 0 }}
                    >
                      <SvgIcon component={() => calendarIcon} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  padding: "9px 14px 9px 13px",
                  color: "#000",
                  fontSize: "10px",
                  lineHeight: "16px",
                  height: "100%",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>

          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "#222",
                marginBottom: "10px",
              }}
            >
              Jodi Digits
            </Typography>
            <TextField
              fullWidth
              id="enter-digit"
              // label=""
              placeholder="Enter Digit"
              value={bidDigit}
              onChange={(e) => setNumValue("bidDigit", e.target.value)}
              //   onClick={handleOpenGameDetail}
              InputProps={{
                sx: {
                  borderRadius: "17px",
                  borderColor: "#DDDDDD",
                  paddingRight: "10px",
                },
                // endAdornment: (
                //     <InputAdornment position="end" >
                //         <IconButton
                //             aria-label="toggle pickup date"
                //             // onClick={handleOpenAttachment}
                //             //   onMouseDown={handleMouseDownPassword}
                //             edge="end"
                //             sx={{ marginRight: 0 }}
                //         >
                //             <SvgIcon component={() => calendarIcon} />
                //         </IconButton>
                //     </InputAdornment>
                // ),
              }}
              inputProps={{
                style: {
                  padding: "9px 14px 9px 13px",
                  color: "#000",
                  fontSize: "10px",
                  lineHeight: "16px",
                  height: "100%",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "#222",
                marginBottom: "10px",
              }}
            >
              Points
            </Typography>
            <TextField
              fullWidth
              id="enter-points"
              // label=""
              placeholder="Enter points"
              value={bidPoints}
              onChange={(e) => setNumValue("bidPoints", e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "17px",
                  borderColor: "#DDDDDD",
                  paddingRight: "10px",
                },
                // endAdornment: (
                //     <InputAdornment position="end" >
                //         <IconButton
                //             aria-label="toggle pickup date"z
                //             // onClick={handleOpenAttachment}
                //             //   onMouseDown={handleMouseDownPassword}
                //             edge="end"
                //             sx={{ marginRight: 0 }}
                //         >
                //             <SvgIcon component={() => calendarIcon} />
                //         </IconButton>
                //     </InputAdornment>
                // ),
              }}
              inputProps={{
                style: {
                  padding: "9px 14px 9px 13px",
                  color: "#000",
                  fontSize: "10px",
                  lineHeight: "16px",
                  height: "100%",
                },
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button
            variant="circular"
            color="primary"
            startIcon={
              <AddCircleIcon
                viewPort="0 0 100 100"
                sx={{ height: "24px", width: "24px" }}
              />
            }
            onClick={createBid}
            sx={{
              justifyContent: "flex-start",
              backgroundColor: "#F64401",
              padding: "3px 5px 3px 8px",
              width: "93px",
              fontSize: "9px",
              lineHeight: "12px",
              "& .MuiButton-startIcon": {
                marginRight: "4px",
              },
            }}
          >
            Add More
          </Button>
        </Box>
        <SinglePanaGameList bidList={bidList} removeBid={removeBid} />
      </Box>
      <Paper
        sx={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: "31px 31px 0 0",
          padding: "12px 24px 10px 15px",
        }}
        elevation={3}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontSize: "18px", lineHeight: "20px", color: "#222" }}
            >
              Bids:
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "20px",
                color: (theme) => theme.palette.primary.main,
                marginLeft: "4px",
              }}
            >
              {totalBidCount}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}
          >
            <Typography
              sx={{ fontSize: "18px", lineHeight: "20px", color: "#222" }}
            >
              Points:
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "20px",
                color: (theme) => theme.palette.primary.main,
                marginLeft: "4px",
              }}
            >
              {totalBidPoints}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="circular"
          onClick={startSubmittingBids}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            width: "120px",
            height: "39px",
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default JodiDigit;

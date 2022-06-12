import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";

const StarlineDashGameCard = ({
  gameTime,
  message,
  gameStatus,
  gameCount
}) => {
  const theme = useTheme();
  const router = useRouter();
  const handleBtnClick = (event) => {
    console.log(" Handle Button Click")
  };
  return (
    <Card
      elevation={6}
      sx={{
        display: "flex",
        borderRadius: "10px",
        // backgroundColor: bgColor,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          //   padding: "23px 9px 12px 9px",
          padding: "10px 0",
          gridTemplateAreas: `"game time play"`,
          gridTemplateColumns: "auto auto auto auto",
          //   alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box style={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", lineHeight: "1", color: "#ccc", mb: '8px' }}
            >
              {gameTime}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "11px", lineHeight: "15px", color: theme => gameStatus ? theme.palette.jackpot.open.dark : theme.palette.jackpot.closed.dark }}
            >
              {message}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "16px", lineHeight: "1", color: "#333", fontWeight:'bold' }}
          >
            {gameCount}
          </Typography>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <IconButton onClick={handleBtnClick}>
          <Box
            sx={{
              backgroundColor: "#F64401",
              borderRadius: "50px",
              height: "40px",
              width: "40px",
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
        <Typography
              sx={{ fontSize: "8px", lineHeight: "12px", color: "#000" }}
            >
              Play Game
            </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export { StarlineDashGameCard };

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CommonCircularButton, GameDetail } from '../CommonPage';

// import { BidTime } from "./BidTime";
// import { NameInfo } from "./NameInfo";
import { playButtonIcon } from "../../src/customIcons";
import { useRouter } from "next/router";


const CenterGameCard = ({
  providerName,
  providerId,
  gameDetails,
  handlePlayClick
}) => {
  const theme = useTheme();
  const router = useRouter();
  console.log('center Game Card ');
  const handleBtnClick = (event) => {

  };
  return (
    <Card
      elevation={6}
      sx={{
        display: "flex",
        borderRadius: "10px",
        backgroundColor: 'white',
        // marginBottom: "1rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          //   padding: "23px 9px 12px 9px",
          padding: "12px 17px 48px 15px",
          gridTemplateAreas: `"game time play"`,
          gridTemplateColumns: "auto auto auto auto",
          //   alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
            <Typography
              sx={{ fontSize: "16px", color: "#222", marginBottom: '4px' }}
            // className={styles.titleSection}
            >
              {gameDetails.gameTitle}
            </Typography>
            <Typography
              color="primary"
              sx={{ fontSize: "16px", fontWeight: 'bold', marginBottom: '5px' }}
            // className={styles.titleSection}
            >
              {gameDetails.gameNumber}
            </Typography>
            <Typography
              sx={{ fontSize: "10px", marginBottom: '5px', color: theme => gameDetails.gameStatus ? theme.palette.jackpot.open.dark : theme.palette.jackpot.closed.dark }}
            // className={styles.titleSection}
            >
              {gameDetails.gameStatus ? 'Open' : "Closed"}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box style={{ display: "flex", flex: 1 }}>
              <Typography
                sx={{ fontSize: "10px", color: "#333" }}
              >
                Open Bids:
              </Typography>
              <Typography
                sx={{ fontSize: "10px", color: "#888" }}
              // className={styles.titleSection}
              >
                {gameDetails.openTime}
              </Typography>
            </Box>
            <Box style={{ display: "flex", flex: 1 }}>
              <Typography
                sx={{ fontSize: "10px", color: "#333" }}
              >
                Close Bids:
              </Typography>
              <Typography
                sx={{ fontSize: "10px", color: "#888" }}
              // className={styles.titleSection}
              >
                                {gameDetails.closeTime}
              </Typography>
            </Box>
          </Box>

        </Box>
        <Box sx={{ paddingLeft: '10px' }}>
          <CommonCircularButton customProps={{ sx: { fontSize: '9px', lineHeight: '12px', padding: '5px', minHeight: '31px', minWidth: '93px', justifyContent: 'space-around' } }} customIcon={<SvgIcon component={() => playButtonIcon} />} onClick={() => console.log("handle Play Game click")} title="Play Game" />
        </Box>
      </Box>
    </Card>
  );
};

export { CenterGameCard };


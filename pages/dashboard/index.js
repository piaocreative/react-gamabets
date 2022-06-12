import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Dash, HeaderNav, BottomNavigationBar } from "../../components";
import appsApi from "../../api/api";
import { actionCreators as acDashboard } from "../../redux/stores/dashboard";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardStore = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(acDashboard.getGameProviders());
  }, []);
  return (
    <div>
      <HeaderNav />
      {dashboardStore.loadingGameProviders ? (
        <Loading />
      ) : (
        <div style={{ padding: "16px 16px 75px 16px" }}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              padding: "23px 9px 12px 9px",
              gridTemplateAreas: `"game time play"`,
              gridTemplateColumns: "auto auto auto ",
              // gridTemplateColumns: 'minmax(0,28px) minmax(0,max-content) minmax(0,40%) minmax(0,max-content)'
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", lineHeight: "1", color: "#000" }}
              >
                Game
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", lineHeight: "1", color: "#000" }}
              >
                Time
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", lineHeight: "1", color: "#000" }}
              >
                Play
              </Typography>
            </Box>
          </Box>
          {Object.keys(dashboardStore.gameProviders).map((k) => (
            <Dash {...dashboardStore.gameProviders[k]} />
          ))}
        </div>
      )}

      <BottomNavigationBar />
    </div>
  );
};

export default Dashboard;

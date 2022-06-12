import React from "react";

import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

import {
  CommonHeaderNav,
  GameCard,
} from "../../../../components";

const gamelist = [
  { title: "Single Digit", img: "new_singledigit.png", color: "#F64401" },
  { title: "Single Pana", img: "new_singlepana.png", color: "#8212D6" },
  { title: "SP DP TP", img: "new_spdptp.png", color: "#F64401" },
  { title: "SP Motor", img: "new_spmotor.png", color: "#32C0C0" },
  { title: "Double Pana", img: "new_doublepana.png", color: "#059E00" },
  { title: "Triple Pana", img: "new_triplelpana.png", color: "#FF2C30" },
  { title: "DP Motor", img: "new_dpmotor.png", color: "#FF4477" },
  { title: "Two Digit Panel", img: "new_tdp.png", color: "#FF09CE" },
  { title: "Odd Even", img: "new_oddeven.png", color: "#336DD4" },
  { title: "Jodi Digit", img: "new_jodidigit.png", color: "#FF4477" },
  { title: "Half Sangam", img: "new_halfsangam.png", color: "#FF7700" },
  { title: "Full Sangam", img: "new_fullsangam.png", color: "#DBB005" },
  { title: "Red Brackets", img: "new_redbracket.png", color: "#FF2C30" },
  { title: "Group Jodi", img: "new_groupjodi.png", color: "#FF7700" },
  { title: "Digit Based Jodi", img: "new_digitbasejodi.png", color: "#9B40DE" },
  { title: "Panel Group", img: "new_panelgroup.png", color: "#01B1B1" },
  { title: "Choice Pana", img: "new_choicepana.png", color: "#17A212" },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // gap: "20%",
  },
  gameItem: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
}));
const Starline = () => {
  const router = useRouter();
  const { providerId, providerName } = router.query;
  const classes = useStyles();
  const handleClick = (event, game) => {
    if (event) event.preventDefault();
    router.push(
      encodeURI(`/providers/${providerId}/${providerName}/${game.title}`)
    );
  };
  return (
    <div>
      <CommonHeaderNav title={`${providerName} DASHBOARD`} />
      <div style={{ padding: "18px 18px 29px 17px" }}>
        <div className={classes.container}>
          {gamelist.map((indvGame) => (
            <div
              key={indvGame.title}
              className={classes.gameItem}
              onClick={(e) => handleClick(e, indvGame)}
            >
              <GameCard
                title={indvGame.title}
                iconUrl={`/imgs/${indvGame.img}`}
                color={indvGame.color || "orange"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starline;

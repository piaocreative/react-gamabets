import { useRouter } from "next/router";
import ChoicePanna from "../../../../components/GamePatterns/ChoicePanna";
import DigitBasedJodi from "../../../../components/GamePatterns/DigitBasedJodi";
import DoublePana from "../../../../components/GamePatterns/DoublePana";
import DPMotor from "../../../../components/GamePatterns/DPMotor";
import FullSigma from "../../../../components/GamePatterns/FullSigma";
import GroupJodi from "../../../../components/GamePatterns/GroupJodi";
import HalfSangam from "../../../../components/GamePatterns/HalfSangam";
import JodiDigit from "../../../../components/GamePatterns/JodiDigit";
import OddEven from "../../../../components/GamePatterns/OddEven";
import PanelGroup from "../../../../components/GamePatterns/PanelGroup";
import RedBracket from "../../../../components/GamePatterns/RedBracket";
import SingleDigit from "../../../../components/GamePatterns/SingleDigit";
import SinglePana from "../../../../components/GamePatterns/SinglePana";
import SPDPTP from "../../../../components/GamePatterns/SPDPTP";
import SPMotor from "../../../../components/GamePatterns/SPMotor";
import TriplePana from "../../../../components/GamePatterns/TriplePana";
import TwoDigitPanel from "../../../../components/GamePatterns/TwoDigitPanel";

const GameDetails = () => {
  const router = useRouter();

  const { providerId, providerName, pattern } = router.query;
  console.log(router);
  console.log({ providerId, providerName, pattern });
  switch (pattern) {
    case "Single Digit":
      return <SingleDigit providerId={providerId} providerName={providerName} />;
    case "Single Pana":
      return <SinglePana providerId={providerId} providerName={providerName} />;
    case "Jodi Digit":
      return <JodiDigit providerId={providerId} providerName={providerName} />;
    case "Double Pana":
      return <DoublePana providerId={providerId} providerName={providerName} />;
    case "Triple Pana":
      return <TriplePana providerId={providerId} providerName={providerName} />;
    case "Panel Group":
      return <PanelGroup providerId={providerId} providerName={providerName} />;
    case "Two Digit Panel":
      return <TwoDigitPanel providerId={providerId} providerName={providerName} />;
    case "Red Brackets":
      return <RedBracket providerId={providerId} providerName={providerName} />;
    case "Odd Even":
      return <OddEven providerId={providerId} providerName={providerName} />;
    case "SP DP TP":
      return <SPDPTP providerId={providerId} providerName={providerName} />;
    case "Group Jodi":
      return <GroupJodi providerId={providerId} providerName={providerName} />;
    case "DP Motor":
      return <DPMotor providerId={providerId} providerName={providerName} />;
    case "SP Motor":
      return <SPMotor providerId={providerId} providerName={providerName} />;
    case "Choice Pana":
      return <ChoicePanna providerId={providerId} providerName={providerName} />;
    case "Digit Based Jodi":
      return <DigitBasedJodi providerId={providerId} providerName={providerName} />;
    case "Half Sangam":
      return <HalfSangam providerId={providerId} providerName={providerName} />;
    case "Full Sangam":
      return <FullSigma providerId={providerId} providerName={providerName} />;
    default:
      return <div>Unknown</div>;
  }
};

export default GameDetails;

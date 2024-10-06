import { Box, Button } from "@mui/material";
import ResultBox from "../components/ResultBox";
import { Link } from "react-router-dom";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function ResultScreen({ personalityType, personalityTypes }) {
  return (
    <ResultBox
      personalityType={personalityType}
      personalityTypes={personalityTypes}
    />
  );
}

export default ResultScreen;

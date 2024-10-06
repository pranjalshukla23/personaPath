import { Box, Button, Slider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";

function ResultBox({ personalityType, personalityTypes }) {
  console.log(personalityType);
  return (
    <Box
      style={{
        height: "400px",
        backgroundColor: "#18152c",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "10px",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Box
        style={{
          width: "60%",
          borderRadius: "10px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        Your Personality driver is: 
        <Box
          style={{
            color: "#ff1675",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {personalityType}
        </Box>
        <Box
          style={{
            fontSize: "20px",
            fontWeight: "medium",
            textAlign: "left",
          }}
        >
          {personalityTypes[personalityType]}
        </Box>
        <Box
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#ff1675",
              borderRadius: "20px",
            }}
          >
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Take The Test Again
            </Link>
          </Button>
        </Box>
      </Box>
      <Box
        style={{
          width: "50%",
          borderRadius: "10px",
          height: "100%",
          backgroundImage: `url(/images/${personalityType}.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
}

export default ResultBox;

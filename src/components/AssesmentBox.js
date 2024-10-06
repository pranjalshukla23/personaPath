import { Box, Button } from "@mui/material";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";
function AssesmentBox() {
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
        <Box
          style={{
            color: "#ff1675",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          PersonaPath: Discover Your Core Strengths
        </Box>
        <Box
          style={{
            fontSize: "20px",
            fontWeight: "medium",
            textAlign: "left",
          }}
        >
          PersonaPath is your go-to skill assessment app designed to help you
          uncover your core personality strengths. By answering a series of
          engaging questions, you’ll discover which of the seven unique
          personality drivers defines your approach to life, learning, and
          creativity. Unlock your true potential and gain personalized insights
          that can guide your personal and professional journey!
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
              to={"/test"}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Take The Test
            </Link>
          </Button>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TimelapseIcon fontSize="medium" /> 10 Minutes
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <HelpOutlineIcon /> 47 Questions
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          width: "50%",
          borderRadius: "10px",
          height: "100%",
          backgroundImage: "url(/images/homepage1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
}

export default AssesmentBox;

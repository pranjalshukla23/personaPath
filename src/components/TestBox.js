import { Box, Button, Slider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";

function TestBox({ question, questionIndex, setQuestionIndex, onAnswer }) {
  const MAX = 5;
  const MIN = 0;
  const marks = [
    {
      value: MIN,
      label: "",
    },
    {
      value: MAX,
      label: "",
    },
  ];
  const [hover, setHover] = useState(false);
  const [val, setVal] = useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
  console.log(question, questionIndex);
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
          width: "100%",
          borderRadius: "10px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "100px",
        }}
      >
        <Box
          style={{
            color: "#ff1675",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {question}
        </Box>
        <Box
          style={{
            height: "200px",
            width: "80%",
          }}
        >
          <Box
            style={{
              gap: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: 400 }}>
              <Slider
                marks={marks}
                step={1}
                value={val}
                valueLabelDisplay="auto"
                min={MIN}
                max={MAX}
                onChange={handleChange}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  onClick={() => setVal(MIN)}
                  sx={{ cursor: "pointer" }}
                >
                  {MIN} min
                </Typography>
                <Typography
                  variant="body2"
                  onClick={() => setVal(MAX)}
                  sx={{ cursor: "pointer" }}
                >
                  {MAX} max
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
        style={{
            backgroundColor: "#e7005e",
            color: "#fff",
            borderRadius: "20px",
            fontSize: "20px",
            width: "200px"
        }}
          onClick={() => {
            onAnswer(val);
            setVal(0);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default TestBox;

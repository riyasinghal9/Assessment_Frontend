import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Timer = ({ onSubmit }) => {
  const initialTimer = 45 * 60;
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          localStorage.setItem("timer", String(prevTimer - 1));
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          onSubmit();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onSubmit]);

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        marginRight: 40,
        marginTop: 100,
        zIndex: 1000,
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: 10,
          width: "100%",
          height: 45,
        }}
      >
        <Typography variant="h8" align="left">
          Time Remaining:
        </Typography>
        <Typography variant="h5" align="right">
          {formatTime(timer)}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Timer;

import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Finish from "./finishTest";
import Element from "./questions";
import Timer from "./timer";

const App1 = (props) => {
  const react = [];

  const [calculatedMarks, setCalculatedMarks] = useState(0);

  const updateCalculatedMarks = (marks) => {
    setCalculatedMarks(marks);
  };

  useEffect(function () {
    console.log(props.location.state.data);
  }, []);

  return (
    <div id="hello">
      <div
        style={{
          textAlign: "left",
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "#D2122E",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          marginBottom: "60px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src="/newstreettech_logo.png"
          alt="Logo"
          style={{ width: 100, height: 50, background: "#D2122E" }}
        />
        <Typography
          variant="h4"
          align="center"
          color="white"
          gutterBottom
          style={{
            flex: 1,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
            maxWidth: "1232px",
            width: "100%",
          }}
        >
          ASSESSMENT 2023-2024
        </Typography>
      </div>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Element updateCalculatedMarks={updateCalculatedMarks} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Timer />
        </Grid>
      </Grid>

      <Finish
        studentData={props.location.state.data}
        calculatedMarks={calculatedMarks}
      />
    </div>
  );
};

export default App1;

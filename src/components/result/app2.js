import { Typography } from "@mui/material";
import React from "react";
import StudentTable from "./StudentTable";

function App2() {
  return (
    <div>
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
          marginBottom: "0px",
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
      <Typography
        variant="h4"
        align="left"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        Students List
      </Typography>
      <StudentTable />
    </div>
  );
}

export default App2;

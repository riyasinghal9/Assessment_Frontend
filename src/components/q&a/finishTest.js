import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postData } from "../../fetchNodeServices";

const Finish = ({ studentData, calculatedMarks }) => {
  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const history = useHistory();

  const handleFinishTest = () => {
    setShowFinishDialog(true);
    studentData.marks = calculatedMarks;
    var result = postData("users", studentData);
    console.log(studentData);

    // const localStorageKeys = Object.keys(localStorage);
    // for (let key of localStorageKeys) {
    //   if (key === "timer") continue;
    //   react.push({ [key]: localStorage.getItem(key) });
    // }
    // console.log("react:", react);
  };

  const handleCloseFinishDialog = () => {
    setShowFinishDialog(false);
    history.push({
      pathname: "/",
    });
  };

  return (
    <div>
      <Grid
        container
        justifyContent="flex-end"
        className="mt-4"
        style={{
          position: "-webkit-sticky",
          position: "fixed",
          bottom: 0,
          zIndex: 1000,
          marginBottom: 10,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginBottom: 20, marginRight: 20 }}
          onClick={handleFinishTest}
        >
          Finish Test
        </Button>
      </Grid>
      <Dialog open={showFinishDialog} onClose={handleCloseFinishDialog}>
        <DialogTitle>Test Completed</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for completing the assessment! Your test has been
            successfully submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFinishDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;

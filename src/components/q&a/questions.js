import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import questions from "./quesans";

const Element = ({ updateCalculatedMarks }) => {
  const arr = [];
  const [marks, setMarks] = useState(0);

  function handleRadioChange(qId, ans, correctAns) {
    arr.push({ question: qId, options: "A, B, C, D", "chosen answer": ans });
    ans === correctAns ? setMarks(marks + 1) : setMarks(marks - 1);
    updateCalculatedMarks(marks);
    console.log("react: ", arr);
    console.log("Total Marks Till Now is ", marks);
  }

  return questions?.map((q, index) => (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ margin: "0", maxWidth: "1232px", width: "100%" }}
      key={q.key}
    >
      <Grid
        item
        xs={12}
        md={8}
        style={{ paddingTop: "10px", paddingBottom: "10px", width: "100%" }}
      >
        <div elevation={3}>
          <Typography paragraph id={q.key}>
            {`${index + 1}.  ${q.ques}`}
          </Typography>
          <RadioGroup
            onChange={(e) =>
              handleRadioChange(q.key, e.target.value, q.choosenAns)
            }
          >
            {q.options.map((opt) => (
              <FormControlLabel
                key={opt.optionKey} // Add a unique key to each FormControlLabel
                value={opt.optionKey}
                control={<Radio />}
                label={opt.option}
              />
            ))}
          </RadioGroup>
          <hr />
        </div>
      </Grid>
    </Grid>
  ));
};

export default Element;

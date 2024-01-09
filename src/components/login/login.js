import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const history = useHistory();

  const handleClick = () => {
    const data = {
      name: name,
      phone: phone,
      email: email,
    };
    history.push({
      pathname: "/Exam",
      state: { data: data },
    });
  };

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div id="hello">
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "#D2122E",
          justifySelf: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
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
          style={{ flex: 1, marginLeft: "auto" }}
        >
          ASSESSMENT 2023-2024
        </Typography>
      </div>

      <Container className="mt-5" maxWidth="lg">
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          style={{ marginTop: 5 }}
        >
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              component={NavLink}
              to="/admin"
            >
              <NavLink to="/admin" style={{ textDecoration: "none" }}>
                Admin Login
              </NavLink>
            </Button>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>

          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              id="gender"
              {...register("gender", { required: true })}
              label="Gender"
              defaultValue="select"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              onChange={(event) => setPhone(event.target.value)}
            />
          </FormControl>

          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              type="text"
              id="name"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="button"
            sx={{ my: 2 }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;

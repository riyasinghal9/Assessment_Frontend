import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignInSide() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "nst" && password === "nst123") {
      history.push({
        pathname: "/Result",
      });
    } else {
      setErr(
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          Invalid credentials
        </Typography>
      );
    }
  };

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
          justifySelf: "center",
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
            flex: 1,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
          }}
        >
          ASSESSMENT 2023-2024
        </Typography>
      </div>

      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          {/* <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          /> */}
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: {
                xs: "none", // No background image for xs (extra small) screens
                sm: "none", // No background image for sm (small) screens
                md: "url(https://source.unsplash.com/random?wallpapers)",
              },
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin Portal Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoFocus
                  autoComplete="username"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  riant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {err}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

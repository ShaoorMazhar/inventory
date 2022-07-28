import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
function ErrorPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ alignItems: "center", height: "60vh", justifyContent: "center" }}>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="h2">404</Typography>
          <h2>THE PAGE YOU REQUESTED COULD NOT FOUND</h2>
          <p className="mb-5">
            The page you are looking for might have been removed, had its name changed or its
            temporarily unavailable.
          </p>
          <NavLink
            to="/"
            style={{
              border: "2px solid #1b4d89",
              textDecoration: "none",
              padding: "8px",
              borderRadius: "20px"
            }}>
            Back to Homepage
          </NavLink>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ErrorPage;

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Skeleton } from "@mui/material";
import theme from "../theme";

export default function DenseAppBar() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // useEffect(() => {
  //   throw new Error("custom error");
  // });
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={150} animation="wave" />
      ) : (
        <>
          <Grid
            container
            sx={{
              backgroundColor: "secondary.main",
              height: "90px",
              paddingLeft: "13%",
              display: "flex",
              alignItems: "center"
            }}>
            <img
              src="https://luminogics.com/wp-content/uploads/2021/11/Luminogics_original_notext.png"
              alt="luminogics_logo"
              width="65px"
            />
            <Typography variant="h6" component="div">
              Luminogics
            </Typography>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" sx={{ paddingLeft: "12%  !important" }}>
                  <Link
                    style={{
                      color: "#fafafa",
                      textDecoration: "none",
                      fontSize: "1rem",
                      marginRight: "30px"
                    }}
                    to="/">
                    Home
                  </Link>
                </Button>

                <Button color="inherit">
                  <Link
                    style={{
                      color: "#fafafa",
                      textDecoration: "none",
                      fontSize: "1rem",
                      marginRight: "30px"
                    }}
                    to="/allStores">
                    Add Stores
                  </Link>
                </Button>

                <Button color="inherit">
                  <Link
                    style={{ color: "#fafafa", textDecoration: "none", fontSize: "1rem" }}
                    to="/table">
                    Stores
                  </Link>
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </>
      )}
    </ThemeProvider>
  );
}

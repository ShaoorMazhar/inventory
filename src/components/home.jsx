import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Stack, Skeleton } from "@mui/material";
import theme from "../theme";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh"
        }}>
        <Grid item xs={6}>
          {loading ? (
            <Stack width="100%">
              <Skeleton variant="h5" width="100%" animation="wave" />
            </Stack>
          ) : (
            <Typography variant="h5">
              An inventory management software for growing your businesses
            </Typography>
          )}
          {loading ? (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "coloum",
                alignItems: "center",
                marginTop: "20px"
              }}>
              <Skeleton variant="h5" width="100%" height={67} animation="wave" />
            </Stack>
          ) : (
            <Typography variant="subtitle1">
              Inventory management software that enables you to control your inventory, manage and
              fulfill your orders, oversee warehouses, and streamline multiple sales channels.
            </Typography>
          )}
        </Grid>

        <Grid item xs={7} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          {loading ? (
            <Skeleton variant="rectangular" width="80%" height={300} animation="wave" />
          ) : (
            <img
              src="https://reviso-wordpress-sites.s3.amazonaws.com/uploads/sites/2/inventory-management-blog.png"
              alt="home"
              width="80%"
            />
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
export default function Home() {
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
          <Typography variant="h5">
            An inventory management software for growing your businesses
          </Typography>
          <Typography variant="subtitle1">
            Inventory management software that enables you to control your inventory, manage and
            fulfill your orders, oversee warehouses, and streamline multiple sales channels.
          </Typography>
        </Grid>
        <Grid item xs={7} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://reviso-wordpress-sites.s3.amazonaws.com/uploads/sites/2/inventory-management-blog.png"
            alt="home"
            width="80%"
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function AllProducts() {
  const productData = useSelector((state) => {
    return state.products.products;
  });
  const result = Object.values(productData);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center"
      }}>
      <Grid item xs={6} mt={6}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}>
              <b> Current Products</b>
              <Fab color="primary" aria-label="add">
                <Link style={{ color: "#fafafa" }} to="/stores">
                  <AddIcon />
                </Link>
              </Fab>
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column"
              }}>
              <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Name</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Quantity</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Price</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Category</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {result.map((product, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell align="right">{product.quantity}</TableCell>
                          <TableCell align="right">{product.price}</TableCell>
                          <TableCell align="right">{product.category}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AllProducts;

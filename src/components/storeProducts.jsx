import React, { useState, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { getProductData } from "../services/tableDataServices";
import Tooltip from "@mui/material/Tooltip";

function StoreProducts() {
  const { id } = useParams();
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    const callingApi = () => {
      getProductData(id)
        .then((res) => {
          setProductItems(res.data.payload.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    callingApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Grid item xs={9} mt={6}>
          <Card sx={{ width: "100%", border: "1px solid black ", height: "500px" }}>
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
                <Tooltip title="Add New Product" placement="left" backgroundcolor="black">
                  <Fab
                    sx={{ backgroundColor: "#1b4d89 !important", borderRadius: "50% !important" }}
                    color="primary"
                    aria-label="add">
                    <Link style={{ color: "#fafafa", display: "flex" }} to={`/stores/${id}`}>
                      <AddIcon sx={{ fontSize: "38px", backgroundColor: "primary.main" }} />
                    </Link>
                  </Fab>
                </Tooltip>
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                <TableContainer
                  component={Paper}
                  sx={{ marginTop: "20px", height: "375px", overflowY: "scroll" }}>
                  <Table size="medium" aria-label="a dense table">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "primary.main" }}>
                        <TableCell align="center" sx={{ color: "primary.light" }}>
                          <b>index</b>
                        </TableCell>
                        <TableCell align="center" sx={{ color: "primary.light" }}>
                          <b>Name</b>
                        </TableCell>
                        <TableCell align="center" sx={{ color: "primary.light" }}>
                          <b>Quantity</b>
                        </TableCell>
                        <TableCell align="center" sx={{ color: "primary.light" }}>
                          <b>Price</b>
                        </TableCell>
                        <TableCell align="center" sx={{ color: "primary.light" }}>
                          <b>Category</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productItems.map((product, i) => (
                        <TableRow
                          key={i}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="center">{i}</TableCell>
                          <TableCell align="center">{product.name}</TableCell>
                          <TableCell align="center">{product.quantity}</TableCell>
                          <TableCell align="center">{product.price}</TableCell>
                          <TableCell align="center">{product.category}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default StoreProducts;

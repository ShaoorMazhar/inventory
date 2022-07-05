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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function AllStores() {
  const data = useSelector((state) => {
    return state?.store?.stores;
  });
  const result = Object.values(data);
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
              <b> Current Stores</b>
              <Fab color="primary" aria-label="add">
                <Link style={{ color: "#fafafa" }} to="/allStores">
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
              <TableContainer xs={12} component={Paper} sx={{ marginTop: "20px" }}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Index</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Name</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Categories</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>View</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {result.map((store, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell>{index}</TableCell>
                          <TableCell align="right">{store.name}</TableCell>
                          <TableCell align="right">{store.categories}</TableCell>
                          <TableCell align="right">
                            <Button sx={{ height: "13px" }} value={store.categorries}>
                              <Link
                                style={{ textDecoration: "none", fontSize: "12px" }}
                                state={{
                                  fromAddStore: true,
                                  categories: store.categories
                                }}
                                to={`storeProducts/${store.id}`}>
                                View
                              </Link>
                            </Button>
                          </TableCell>
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

export default AllStores;

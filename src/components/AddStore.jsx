import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function AddStore() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [stores, setStores] = useState([]);
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setCategories([...categories, value]);
    setCategoryType([]);
  }
  function removeCategory(index) {
    setCategories(categories.filter((el, i) => i !== index));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    }

    if (categoryType === "") {
      setCategoryError(true);
    }

    const newStore = {
      name: name,
      categories: categories
    };

    setStores([...stores, newStore]);
    setName("");
    setCategoryType("");
    setCategories([]);
    if (name && categoryType) {
      alert("Store created successfully!");
    }
    setNameError(false);
    setCategoryError(false);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center"
      }}>
      <Grid container maxWidth={"sm"} mt={6}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <b> Create Your Store</b>
            </Typography>
            <Divider />
            <Box
              component="form"
              sx={{
                padding: "5%",
                display: "flex",
                flexDirection: "column"
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}>
              <TextField
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="storeName"
                label="Store Name"
                variant="outlined"
                value={name}
                error={nameError}
                sx={{ marginTop: "20px", width: "100%" }}
              />

              <TextField
                onChange={(e) => {
                  setCategoryType(e.target.value);
                }}
                id="storeCategory"
                label="Store Categories"
                variant="outlined"
                value={categoryType}
                error={categoryError}
                onKeyDown={handleKeyDown}
                sx={{ marginTop: "20px", width: "100%" }}
              />
              <Grid item sx={{ fontSize: "13px" }}>
                You can add multiple categories by pressing Enter
              </Grid>

              <Grid
                container
                sx={{
                  display: "flex",
                  gap: ".3em"
                }}>
                {categories.map((categories, index) => (
                  <Grid
                    item
                    key={index}
                    sx={{
                      backgroundColor: "rgb(218, 216, 216)",
                      padding: ".3em",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      marginTop: ".5em"
                    }}>
                    {categories}
                    <Grid
                      item
                      sx={{
                        height: "20px",
                        width: "20px",
                        backgroundColor: "rgb(48, 48, 48)",
                        color: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: ".3em",
                        fontSize: "18px",
                        cursor: "pointer"
                      }}
                      onClick={() => removeCategory(index)}>
                      &times;
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              <Button
                disabled={name === "" || categories?.length === 0}
                sx={{ marginTop: "20px" }}
                variant="contained"
                onClick={handleSubmit}>
                Create
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid item sx={{ marginTop: "20px", marginLeft: "20px", fontSize: "18px" }}>
          <b>Current Stores</b>
        </Grid>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
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
              {stores.map((store, index) => {
                return (
                  <TableRow
                    key={store.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell>{index}</TableCell>
                    <TableCell align="right">{store.name}</TableCell>
                    <TableCell align="right">{store.categories}</TableCell>
                    <TableCell align="right">
                      <Button value={store.categorries}>
                        <Link
                          style={{ textDecoration: "none" }}
                          state={{
                            fromAddStore: true,
                            categories: store.categories
                          }}
                          to={{
                            pathname: "stores"
                          }}>
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
      </Grid>
    </Grid>
  );
}

export default AddStore;

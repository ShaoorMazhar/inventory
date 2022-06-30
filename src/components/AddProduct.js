import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory("");
    setName("");
    setQuantity("");
    setPrice("");
    const newProducts = {
      name: name,
      category: category,
      price: price,
      quantity: quantity,
    };

    setProducts([...products, newProducts]);
    if (name && quantity && price && category) {
      alert("Data Added Successfully!");
    }
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container maxWidth={"sm"} mt={6}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Add Product details
            </Typography>
            <Divider />
            <Box
              component="form"
              sx={{
                padding: "5%",
                display: "flex",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="productName"
                label="Product Name"
                variant="outlined"
                value={name}
                sx={{ marginTop: "20px", width: "100%" }}
              />
              <TextField
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                type="number"
                id="productQsuantity"
                label="Product Quantity"
                variant="outlined"
                value={quantity}
                sx={{ marginTop: "20px", width: "100%" }}
              />
              <TextField
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                id="productPrice"
                label="Product Price"
                variant="outlined"
                value={price}
                sx={{ marginTop: "20px", width: "100%" }}
              />
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>

                <Select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  required
                >
                  {location?.state?.categories.map((item) => {
                    return (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Button
                disabled={
                  name === "" ||
                  price === "" ||
                  quantity === "" ||
                  category?.length === 0
                }
                sx={{ marginTop: "20px" }}
                variant="contained"
                onClick={handleSubmit}
              >
                Add
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid
          item
          sx={{ marginTop: "20px", marginLeft: "20px", fontSize: "18px" }}
        >
          <b>Current Stores</b>
        </Grid>
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
              {products.map((product) => {
                return (
                  <TableRow
                    key={product.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
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
      </Grid>
    </Grid>
  );
}

export default AddProduct;

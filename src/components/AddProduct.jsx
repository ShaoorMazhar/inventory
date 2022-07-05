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
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/action";
import { Link, useParams } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state?.store?.stores?.filter((st) => st?.id === id);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducts = {
      name: name,
      category: category,
      price: price,
      quantity: quantity,
      storeId: id
    };
    dispatch(addProduct(newProducts));
    setProducts([...products, newProducts]);
    if (name && quantity && price && category) {
      alert("Data Added Successfully!");
    }

    setCategory("");
    setName("");
    setQuantity("");
    setPrice("");
  };
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
            <Typography variant="h5" component="div">
              Add Product details
            </Typography>
            <Divider />
            <Box
              component="form"
              sx={{
                padding: "3%",
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
                  required>
                  {data?.length > 0 &&
                    data[0]?.categories?.map((item) => {
                      return (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end"
                }}>
                <Button
                  disabled={
                    name === "" || price === "" || quantity === "" || category?.length === 0
                  }
                  sx={{ marginTop: "20px", width: "30%", height: "40px" }}
                  variant="contained"
                  onClick={handleSubmit}>
                  <Link
                    style={{ color: "#fafafa", textDecoration: "none" }}
                    to={`/storeProducts/${data?.length > 0 && data[0]?.id}`}>
                    Add
                  </Link>
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddProduct;

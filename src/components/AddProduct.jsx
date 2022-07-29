import React, { useState, useEffect } from "react";
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
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCategories, addProductData } from "../services/tableDataServices";
import { ToastContainer, toast } from "react-toastify";

function AddProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const [storeItems, setstoreItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const callingApi = () => {
      getCategories(id)
        .then((res) => {
          setstoreItems(res.data.payload.data.categories);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    callingApi();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Store added successfully!");
    const newProducts = {
      name: name,
      category: category,
      price: price,
      quantity: quantity
    };
    const DataApi = await addProductData(newProducts, id);

    dispatch(addProduct(DataApi));
    setProducts([...products, newProducts]);
    setCategory("");
    setName("");
    setQuantity("");
    setPrice("");
    navigate(`/table/storeProducts/${id}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Grid item xs={9} mt={6}>
          <Card sx={{ width: "100%", border: "1px solid black " }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px"
                }}>
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
                    {storeItems?.map((item) => {
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
                    sx={{
                      marginTop: "20px !important",
                      width: "30%",
                      height: "40px",
                      backgroundColor: "primary.main",
                      color: "#fafafa"
                    }}
                    variant="contained"
                    onClick={handleSubmit}>
                    Add
                  </Button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AddProduct;

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { addStore } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
function AddStore() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [stores, setStores] = useState([]);
  const dispatch = useDispatch();
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
      id: uuidv4(),
      name: name,
      categories: categories
    };
    console.log(newStore);
    setStores([...stores, newStore]);
    dispatch(addStore(newStore));
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
      <Grid item xs={6} mt={6}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <b> Create Your Store</b>
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
                {categories?.map((categories, index) => (
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end"
                }}>
                <Button
                  disabled={name === "" || categories?.length === 0}
                  sx={{ marginTop: "20px", width: "30%", height: "40px" }}
                  variant="contained"
                  onClick={handleSubmit}>
                  <Link style={{ color: "#fafafa", textDecoration: "none" }} to="/">
                    Create
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

export default AddStore;

import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import { getTableData } from "../services/tableDataServices";
import { v4 as uuidv4 } from "uuid";

const columns = [
  { field: "index", headerName: "No", flex: 1, key: 1, headerClassName: "super-app-theme--header" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    key: 2,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "categories",
    headerName: "Category",
    flex: 1,
    key: 3,
    headerClassName: "super-app-theme--header"
  },

  {
    field: "action",
    headerName: "Visit",
    flex: 1,
    key: 4,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => {
      return (
        <Button key={params.row._id} sx={{ height: "13px" }} value={params.row.categories}>
          <Link
            style={{ textDecoration: "none", fontSize: "12px" }}
            state={{
              fromAddStore: true,
              categories: params.row.categories
            }}
            to={`storeProducts/${params.row._id}`}>
            View
          </Link>
        </Button>
      );
    }
  }
];

export default function Stores() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const DataApi = await getTableData();

    setData(DataApi);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const modifiedRows = data.map((element, index) => {
    return {
      ...element,
      name: element.name,
      index: index,
      categories: element.categories
    };
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          justifyContent: "center"
        }}>
        <Grid item xs={9} mt={6}>
          <Card
            sx={{
              width: "100%",
              border: "1px solid black ",
              height: "500px"
            }}>
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
                <Fab
                  sx={{ backgroundColor: "#1b4d89 !important", borderRadius: "50% !important" }}
                  aria-label="add">
                  <Link style={{ color: "#fafafa", display: "flex" }} to="/allStores">
                    <AddBusinessTwoToneIcon
                      sx={{ fontSize: "38px", backgroundColor: "primary.main " }}
                    />
                  </Link>
                </Fab>
              </Typography>

              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    key={(row) => (row.id = uuidv4())}
                    rows={modifiedRows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => (row.id = uuidv4())}
                  />
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

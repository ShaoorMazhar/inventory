import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1b4d89 ", //blue
      //   dark: "#1A2027",
      light: "#fafafa" //white
    },
    secondary: {
      main: "#c8d8e4", //light blue
      //   dark: "#3E5060",
      light: "#6db784" //green
    }
  },
  typography: {
    h3: {
      fontWeight: 600,
      lineHeight: "1.4",
      fontSize: "2.2rem"
    },
    h4: {
      fontWeight: 600,
      lineHeight: "1.4",
      marginBottom: "0.35em",
      fontFamily: "sans-serif"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.6rem",
      textAlign: "center"
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 600,
      marginLeft: "10px",
      color: "primary.main"
    },
    subtitle1: {
      fontWeight: 200,
      fontSize: "1.2rem",
      paddingTop: "10px",
      textAlign: "center"
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#c8d8e4",
          color: "black"
        }
      }
    }
  }
});

export default theme;

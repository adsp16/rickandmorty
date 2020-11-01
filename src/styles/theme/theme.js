import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
// import "../assets/fonts/googleFontImports.css";
// import amber from "@material-ui/core/colors/amber";

const anton = "'Anton', sans-serif";
const montserrat = "'Montserrat', sans-serif'";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#24282F",
      grey: "#F2F2F2",
      antiflashwhite: "#F2F2F2",
      white: "white",
    },
    secondary: {
      main: "#3A3C42",
      grey: "#F9F9F9",
    },
  },
  typography: {
    subtitle1: {
      fontFamily: montserrat,
    },
    subtitle2: {
      fontFamily: montserrat,
    },
    h2: {
      fontFamily: anton,
      color: "white",
    },
    h4: {
      fontFamily: anton,
      color: "white",
    },
    h5: {
      fontFamily: anton,
      color: "white",
    },
    h6: {
      fontFamily: montserrat,
      color: "white",
    },
    body1: {
      fontFamily: montserrat,
    },
    body2: {
      fontFamily: montserrat,
      fontWeight: "bold",
    },
    body3: {
      fontFamily: montserrat,
      fontWeight: "bold",
      fontSize: "2rem",
    },
    button: {
      fontFamily: montserrat,
      textTransform: "capitalize",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

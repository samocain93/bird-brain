import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDB813",
    },
    secondary: {
      main: "#fdd471", 
      // #e6ac00

      // brown color #8E7E71
    },
    profile_avatar: {
      main: "#f3f0ec",
      bright: "6EAED8",
    },
  },
  typography: {
    fontFamily: [
      'Lobster', 
      'Libre Franklin',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

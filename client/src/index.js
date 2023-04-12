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
      main: "#e6ac00",
    },
    profile_avatar: {
      main: "#5499C7",
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

import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";
import Footer from "./Footer.js";

function Layout(props) {
  return (
    <>
      <Header />
      <Container fixed>{props.children}</Container>
      <Footer/>
    </>
  );
}

export default Layout;

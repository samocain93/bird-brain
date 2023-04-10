import React from "react";
import ResponsiveAppBar from "./Header";
import { Container } from "@mui/material";

function Layout(props) {
  return (
    <>
      <ResponsiveAppBar />
      <Container fixed>{props.children}</Container>
    </>
  );
}

export default Layout;

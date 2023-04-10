import React from "react";
import { Grid } from "@mui/material";

function Body(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default Body;

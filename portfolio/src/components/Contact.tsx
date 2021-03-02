import React from "react";
import { Grid } from "@material-ui/core";

const Contact = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>1</Grid>
          <Grid item>2</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          <Grid item>3</Grid>
          <Grid item>4</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;

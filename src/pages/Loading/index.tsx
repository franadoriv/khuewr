import React from "react";
import Image from "@material-ui/core/";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  useTheme
} from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    minHeight: "100vh",
    transition: "opacity 1s ease-in-out",
    pointerEvents: "none"
  }
}));

interface ILoading {
  visible: boolean;
}

export default function Loading(props: ILoading) {
  const { visible } = props;

  const classes = useStyles();
  console.log(visible);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <Grid item xs={3}>
        <img src="/img/soraLoading.gif" alt="cur" />
        <Typography>Loading...</Typography>
      </Grid>
    </Grid>
  );
}

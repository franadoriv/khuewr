import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "100%"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default useStyles;

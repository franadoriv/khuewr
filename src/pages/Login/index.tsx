import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import BuildIcon from "@material-ui/icons/Build";
import IconButton from "@material-ui/core/IconButton";
import dlgModalEvents from "../../components/DialogModal/eventsHandler";
import useStyles from "./styles";
import AppConfig from "../../objects/AppConfig";

interface ILoginPage {
  loginResponse?: (resp: any, isLogged: boolean) => void;
  visible?: boolean;
}

export default function LoginPage(props: ILoginPage) {
  const { loginResponse, visible } = props;
  const classes = useStyles();
  const openConfig = () => {
    dlgModalEvents.notify({ open: true });
  };

  return (
    <Grid
      container
      component="main"
      className={classes.root}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <CssBaseline />

      <Grid
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        item
        xs={12}
        sm={5}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c819a5d7-18f6-4ee1-9150-de2de2c2000a/d9rya2n-857e63ad-79f0-449d-9bab-70ebff0153f6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzgxOWE1ZDctMThmNi00ZWUxLTkxNTAtZGUyZGUyYzIwMDBhXC9kOXJ5YTJuLTg1N2U2M2FkLTc5ZjAtNDQ5ZC05YmFiLTcwZWJmZjAxNTNmNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gs9dRzag2zkUkUPIxtqBqzQVbRLloHNbsr76GUeAzQM"
          ></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form
            className={classes.form}
            noValidate
            style={{ textAlign: "center" }}
          >
            <GoogleLogin
              className={classes.submit}
              clientId={AppConfig.googleClientID}
              buttonText="Login"
              onSuccess={(resp) => {
                console.log("tomatina");
                loginResponse?.(resp, true);
              }}
              onFailure={(resp) => {
                console.log("tomatina 2");
                loginResponse?.(resp, false);
              }}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={7} md={7} className={classes.image} />
      <IconButton className={classes.buildBtn} onClick={openConfig}>
        <BuildIcon />
      </IconButton>
    </Grid>
  );
}

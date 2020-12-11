import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  useTheme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/index";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AnimationsPage from "./../pages/Animations/index";
import PawnsPage from "./../pages/Pawns/index";
import MapsPage from "./../pages/Maps/index";
import LoginPage from "./../pages/Login";
import UnrealRemotePage from "./../pages/UnrealRemote/index";
import LeftMenu from "./../components/LeftMenu/index";
import { Switch, Route, BrowserRouter, useLocation } from "react-router-dom";
import BackendApi from "./../utilities/BackendApi";
import DialogModal from "./../components/DialogModal";
import ConfigModal from "./../modal/Configuration";
import Loading from "./../pages/Loading";
import { useGoogleLogin } from "react-google-login";
import AppConfig from "./../objects/AppConfig";
import useStyles from "./styles";
import eventsHandler from "./eventsHandler";

interface IState {
  logged: boolean;
  loading: boolean;
  currentTitle?: string;
}

const areEqual = (prevProps, nextProps) => {
  //Avoid reload
  return false;
};

const Content = React.memo(
  (props: {
    open: boolean;
    setOpen: (open: boolean) => void;
    onLoginResponse: (a: any, b: any) => void;
  }) => {
    const { open, setOpen, onLoginResponse } = props;
    const theme = createMuiTheme({
      palette: {
        type: "dark"
      }
    });

    const classes = useStyles(theme);
    return (
      <BrowserRouter>
        <LeftMenu
          onMenuToggle={setOpen}
          open={open}
          onLoginOut={() => onLoginResponse(null, false)}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/" render={() => <PawnsPage />} />
            <Route exact path="/pawns" render={() => <PawnsPage />} />
            <Route path="/animations" render={() => <AnimationsPage />} />
            <Route path="/maps" render={() => <MapsPage />} />
            <Route path="/unreal" render={() => <UnrealRemotePage />} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  },
  areEqual
);

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  const classes = useStyles(theme);

  const { loaded } = useGoogleLogin({
    clientId: AppConfig.googleClientID
  });

  console.log({ loaded });

  const [state, setState] = useState<IState>({ logged: false, loading: true });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const changeTitle = (newTitle: string) => {
    console.log("change title:", newTitle);
    //setState({ ...state, currentTitle: newTitle });
  };

  const onLoginResponse = async (resp: any, isLogged: boolean) => {
    console.log("onLoginResponse:", { resp, isLogged });
    let logged =
      resp && resp.tokenId ? await BackendApi.LoginIn(resp.tokenId) : false;
    setState({
      logged,
      loading: false
    });
  };

  useEffect(() => {
    eventsHandler.attach({ typeName: "setTitle", action: changeTitle });
    return function cleanup() {
      eventsHandler.detach(changeTitle);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        {state.logged && (
          <div
            style={{
              width: "100%",
              height: "100%",
              opacity: state.logged ? 1 : 0,
              transition: "opacity 1s ease-in-out"
            }}
          >
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open
              })}
            >
              <Toolbar className={classes.toolBar}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  {state.currentTitle}
                </Typography>
              </Toolbar>
            </AppBar>
            <Content
              open={open}
              setOpen={setOpen}
              onLoginResponse={onLoginResponse}
            />
          </div>
        )}

        <div
          style={{
            opacity: state.logged ? 0 : 1,
            transition: "opacity 1s ease-in-out",
            position: "fixed",
            width: "100%",
            height: "100%",
            pointerEvents: state.logged ? "none" : "auto"
          }}
        >
          <Loading visible={!loaded} />
          {!state.logged && (
            <LoginPage loginResponse={onLoginResponse} visible={loaded} />
          )}
        </div>

        <DialogModal title="Configuration">
          <ConfigModal />
        </DialogModal>
      </div>
    </ThemeProvider>
  );
};

export default App;

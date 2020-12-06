import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Paper,
  Button,
  Box,
  Menu,
  MenuItem,
  Backdrop,
  CircularProgress
} from "@material-ui/core";
import ExternalList from "../../components/ExternalList/index";
import SaveIcon from "@material-ui/icons/Save";
import { SnackbarProvider, useSnackbar } from "notistack";
import UnrealHelper from "../../utilities/UnrealHelper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const initialState = {
  mouseX: null,
  mouseY: null,
  selected: { _id: "", id: "", name: "" },
  loading: false
};

export default function PawnsPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  ///const [selected, setSelected] = useState({ _id: "", name: "" });
  const [state, setState] = React.useState(initialState);

  const onSelect = (item: any) => {
    setState({ ...state, selected: item });
  };

  const colorCallback = (item: any) => {
    return item.name.length > 0 ? "black" : "red";
  };

  const labelCallback = (item: any) => {
    return `${item.id} ${item.name}`;
  };

  const handleSave = async () => {
    if (!selected["_id"]) return;
    try {
      let result = await fetch("https://kh3db.herokuapp.com/pawns", {
        method: "POST",
        body: JSON.stringify(selected)
      });

      // variant could be success, error, warning, info, or default
      enqueueSnackbar("Saved!", { variant: "success" });
    } catch (ex) {
      enqueueSnackbar(ex.message, { variant: "error" });
    }
  };

  const handleCloseMctx = () => {
    setState({ ...initialState, selected: state.selected });
  };

  const contextCallback = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item
  ) => {
    e.preventDefault();
    setState({
      ...state,
      selected: item,
      mouseX: e.clientX - 2,
      mouseY: e.clientY - 4
    });
  };

  const createCharacter = async () => {
    setState({ ...initialState, selected: state.selected, loading: true });
    try {
      await UnrealHelper.createCharacter(state.selected.id);
    } catch (ex) {
      setState({ ...state, loading: false });
      enqueueSnackbar(ex.message, { variant: "error" });
    }
    setState({ ...initialState, selected: state.selected, loading: false });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <ExternalList
              url={"https://kh3db.herokuapp.com/pawns"}
              onSelect={onSelect}
              colorCallback={colorCallback}
              labelCallback={labelCallback}
              contextCallback={contextCallback}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={state.selected?.name}
                onChange={(e) => {
                  state.selected.name = e.target.value;
                  setState({ ...state, selected: { ...state.selected } });
                }}
              />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
          </Paper>
          <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleCloseMctx}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={createCharacter}>Create</MenuItem>
      </Menu>
      <Backdrop className={classes.backdrop} open={state.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

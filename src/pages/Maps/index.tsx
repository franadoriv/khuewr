import React, { useEffect, useState } from "react";
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
  CircularProgress,
  Select
} from "@material-ui/core";
import ExternalList from "../../components/ExternalList";
import SaveIcon from "@material-ui/icons/Save";
import { SnackbarProvider, useSnackbar } from "notistack";
import UnrealHelper from "../../utilities/UnrealHelper";
import MapTreeView from "./../../components/MapTreeView";
import DropDownList from "./../../components/DropDownList";
import { Map } from "./../../objects/Map";
import MeshTable from "./../../components/MeshTable";

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
  },
  selectEmpty: {
    //marginTop: theme.spacing(2),
    width: "100%"
  }
}));

const initialState = {
  mouseX: null,
  mouseY: null,
  selected: { _id: "", id: "", name: "" },
  loading: false,
  selectedMapID: null
};

export default function MapsPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = React.useState(initialState);
  const [mapsList, setMapsList] = useState([]);
  const [mapAreas, setMapAreas] = useState<Map[]>([]);
  const [mapArea, setMapArea] = useState<Map>(null);

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

  const importMap = async () => {
    setState({ ...initialState, selected: state.selected, loading: true });
    try {
      //await UnrealHelper.createCharacter(state.selected.id);
    } catch (ex) {
      setState({ ...state, loading: false });
      enqueueSnackbar(ex.message, { variant: "error" });
    }
    setState({ ...initialState, selected: state.selected, loading: false });
  };

  const onMapSelect = (id: string) => {
    const mapItem = mapsList.filter((m) => m._id == id)[0];
    console.log(mapItem);
    if (!mapItem) return;
    fetch(`${process.env.API_ADDRESS}/mapareas/${mapItem._id}`).then((res) => {
      console.log("fetched:", res);
      res.json().then(setMapAreas);
      setState({ ...state, selectedMapID: id });
    });
  };

  const onTreeSelect = (typeName: string, mapArea: Map) => {
    switch (typeName) {
      case "staticMeshActor":
        setState({ ...state, loading: true });
        fetch(`${process.env.API_ADDRESS}/maparea/${mapArea.name}`).then(
          (res) => {
            setState({ ...state, loading: false });
            console.log("fetched:", res);
            res.json().then((r) => r && setMapArea(r[0]));
          }
        );
        break;
    }
  };

  useEffect(() => {
    fetch(`${process.env.API_ADDRESS}/maps`).then((res) => {
      console.log("fetched:", res);
      res.json().then(setMapsList);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "red", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {/*<DropDownList
              label="Maps list"
              options={mapsList}
              getOptionLabel={(o) => o._id}
              onSelect={onMapSelect}
            />*/}
            <InputLabel id="mapListLabel">Map's list</InputLabel>
            <Select
              labelId="mapListLabel"
              value={state.selectedMapID}
              onChange={(e) => onMapSelect(e.target.value)}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              {mapsList &&
                mapsList.map((map) => (
                  <MenuItem value={map._id}>{map._id}</MenuItem>
                ))}
            </Select>
            <MapTreeView mapAreas={mapAreas} onSelect={onTreeSelect} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={state.selected?._id}
                onChange={(e) => {
                  state.selected.name = e.target.value;
                  setState({ ...state, selected: { ...state.selected } });
                }}
              />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
            <br />
            {mapArea && <MeshTable meshList={mapArea?.staticMeshActorList} />}
          </Paper>
          <Box display="flex" justifyContent="flex-end"></Box>
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
        <MenuItem onClick={importMap}>Import</MenuItem>
      </Menu>
      <Backdrop className={classes.backdrop} open={state.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Paper,
  Button,
  Box
} from "@material-ui/core";
import ExternalList from "../../components/ExternalList/index";
import SaveIcon from "@material-ui/icons/Save";
import { SnackbarProvider, useSnackbar } from "notistack";

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

export default function AnimationsPage() {
  const classes = useStyles();
  const [selected, setSelected] = useState({ _id: "", name: "", usedBy: [] });
  const [pawns, setPawns] = useState({ _id: "", name: "" });
  const { enqueueSnackbar } = useSnackbar();

  const onSelect = (item: any) => {
    console.log(item);
    setSelected(item);
  };

  const colorCallback = (item: any) => {
    return item.name.length > 0 ? "black" : "red";
  };

  const filterCallback = (item: any) => {
    return selected?.usedBy?.includes(item.id);
  };

  const labelCallback = (item: any) => {
    return `${item.id} ${item.name}`;
  };

  const handleSave = async () => {
    if (!selected["_id"]) return;
    try {
      let result = await fetch("https://kh3db.herokuapp.com/animations", {
        method: "POST",
        body: JSON.stringify(selected)
      });

      // variant could be success, error, warning, info, or default
      enqueueSnackbar("Saved!", { variant: "success" });
    } catch (ex) {
      enqueueSnackbar(ex.message, { variant: "success" });
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <ExternalList
              url={"https://kh3db.herokuapp.com/animations"}
              onSelect={onSelect}
              colorCallback={colorCallback}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <FormControl>
              <InputLabel htmlFor="my-input">Identifier</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={selected?.name}
                onChange={(e) => {
                  selected.name = e.target.value;
                  setSelected({ ...selected });
                }}
              />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
            <fieldset>
              <legend>Animation used by:</legend>
              <ExternalList
                url={"https://kh3db.herokuapp.com/pawns"}
                filterCallback={filterCallback}
                labelCallback={labelCallback}
              />
            </fieldset>
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
    </div>
  );
}

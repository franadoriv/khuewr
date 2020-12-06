import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import {
  FormControl,
  Input,
  InputAdornment,
  FormHelperText
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "100%"
  }
}));

type onSelectCallback<T> = (item: T) => void;

interface IExternalList {
  url: string;
  onSelect?: onSelectCallback<any>;
  colorCallback?: (item: any) => string;
  labelCallback?: (item: any) => string;
  filterCallback?: (item: any) => boolean;
  contextCallback?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: any
  ) => void;
}

export default function ExternalList(props: IExternalList) {
  const {
    url,
    onSelect,
    colorCallback,
    labelCallback,
    filterCallback,
    contextCallback
  } = props;
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  let filteredItems = searchFilter
    ? items.filter((i) => i.id.includes(searchFilter))
    : items;
  if (filterCallback != null)
    filteredItems = filteredItems.filter(filterCallback);

  const Row = ({ index, style }) => {
    const item = filteredItems[index];

    return (
      <ListItem
        button
        style={style}
        key={index}
        onClick={() => onSelect?.(item)}
        onContextMenu={(e) => contextCallback?.(e, item)}
      >
        <ListItemText
          primaryTypographyProps={{
            style: { color: colorCallback?.(item) || "red" }
          }}
          primary={labelCallback ? labelCallback(item) : `${item.id}`}
        />
      </ListItem>
    );
  };

  useEffect(() => {
    fetch(url).then((res) => {
      console.log("fetched");
      res.json().then((r) => setItems(r));
    });
  }, []);

  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(
          classes.margin,
          classes.withoutLabel,
          classes.textField
        )}
      >
        <Input
          id="standard-adornment-weight"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          endAdornment={<InputAdornment position="end">ID</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            "aria-label": "weight"
          }}
        />
        <FormHelperText id="standard-weight-helper-text">Search</FormHelperText>
      </FormControl>
      <FixedSizeList
        height={400}
        width={"100%"}
        itemSize={46}
        itemCount={filteredItems.length}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}

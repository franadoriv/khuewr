/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface IDropDownList {
  options?: any[];
  url?: string;
  getOptionLabel?: (option: any) => string;
  label?: string;
  onSelect?: (option: any) => void;
}

export default function DropDownList(props: IDropDownList) {
  const { url, getOptionLabel, label, onSelect } = props;
  const [options, setOptions] = useState(props.options);

  useEffect(() => {
    if (!props.options && url) {
      fetch(url).then((res) => {
        console.log("fetched:", res);
        res.json().then((r) => {
          console.log(r);
          setOptions(r);
        });
      });
    }
  }, [props.options, url]);

  return (
    <Autocomplete
      onChange={(event: any, newValue: any | null) => {
        onSelect?.(newValue);
      }}
      options={props.options || options || []}
      getOptionLabel={getOptionLabel || ((option) => option.title)}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}

import React, { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { DialogContentText } from "@material-ui/core";
import AppConfig from "./../../objects/AppConfig";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

interface IConfigModal {
  onConfigChange?: (newConfig: any) => void;
}

export default function ConfigModal(props: IConfigModal) {
  const { onConfigChange } = props;
  const classes = useStyles();
  const config: any = {};

  const onFieldChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(e.target.value);
    console.log(e.target.id);
    if (AppConfig.hasOwnProperty(e.target.id))
      AppConfig[e.target.id] = e.target.value;
  };

  return (
    <>
      <DialogContentText>
        The following configuration is saved on the local storage
      </DialogContentText>
      <TextField
        autoComplete="off"
        autoFocus
        defaultValue={AppConfig.googleClientID}
        margin="dense"
        id="googleClientID"
        label="Google client ID"
        type="text"
        fullWidth
        onChange={onFieldChange}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id="apiAddress"
        label="KH3DB - API endpoint address"
        type="text"
        fullWidth
        defaultValue={AppConfig.apiAddress}
        onChange={onFieldChange}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id="ueRemContAddress"
        label="Unreal Engine - Remote controller endpoint address"
        type="email"
        fullWidth
        defaultValue={AppConfig.ueRemContAddress}
        onChange={onFieldChange}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id="unpckGameFolderPath"
        label="Unpacked GAME folder - Local path"
        type="email"
        fullWidth
        defaultValue={AppConfig.unpckGameFolderPath}
        onChange={onFieldChange}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id="noesisPath"
        label="Noesis - Local path"
        type="email"
        fullWidth
        defaultValue={AppConfig.noesisPath}
        onChange={onFieldChange}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id="uModelPath"
        label="UModel - Local path"
        type="email"
        fullWidth
        defaultValue={AppConfig.uModelPath}
        onChange={onFieldChange}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id="tempFolderPath"
        label="Temp folder - Local path"
        type="email"
        fullWidth
        defaultValue={AppConfig.tempFolderPath}
        onChange={onFieldChange}
      />
    </>
  );
}

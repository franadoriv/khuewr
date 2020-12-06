import { SnackbarProvider } from "notistack";
import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

render(
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>,
  rootElement
);

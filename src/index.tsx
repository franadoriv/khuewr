import { SnackbarProvider } from "notistack";
import * as React from "react";
import { render } from "react-dom";

import App from "./App/App";

const rootElement = document.getElementById("root");

let tomate = localStorage.getItem("TOMATE");
console.log(`${tomate ? "Was" : "Was not"} set`);
localStorage.setItem("TOMATE", "Smith");

render(
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>,
  rootElement
);

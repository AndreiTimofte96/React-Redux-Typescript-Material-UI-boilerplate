import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import AppRoute from "./routes";
import store from './store'

import "./assets/css/main.css";

import theme from "./theme";

render(
  (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
    </Provider>
  ),
  document.getElementById("app"),
);

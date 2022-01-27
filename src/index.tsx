import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createTheme } from "styled-breakpoints";
import { Provider } from "react-redux";

import { GlobalStyle, theme, breakpoints } from "./styles";
import { GlobalFonts } from "./assets/fonts";
import { store } from "./app/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFonts />
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={createTheme(breakpoints)}>
          <Router>
            <Switch>
              <Route exact path="/" component={App} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </ThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

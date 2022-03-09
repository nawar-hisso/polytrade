import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import reducres from "./reducers";

import App from "./App";

const store = createStore(reducres, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

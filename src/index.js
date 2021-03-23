import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import DataContextProvider from "./Context";

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById("root")
);

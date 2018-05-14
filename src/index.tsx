import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  const app = (
    <App
      name="crazytoucan"
    />
  );

  ReactDOM.render(app, document.getElementById("app"));
});

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

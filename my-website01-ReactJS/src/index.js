import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.css"
import "./assets/css/utils.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

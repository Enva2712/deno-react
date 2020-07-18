import { React, ReactDOM } from "https://unpkg.com/es-react@16.13.1/index.js";

import App from "./components/app.jsx";

let $elm = document.getElementById("__deno_reactor");
if ($elm) {
  ReactDOM.hydrate(<App />, $elm);
} else {
  console.log("No element");
}

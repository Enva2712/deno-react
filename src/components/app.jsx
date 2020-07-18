import React from "https://unpkg.com/es-react@16.13.1/react.js";
import Counter from "./counter.jsx";

export default function App(props) {
  return (<>
    <p>This is server rendered react in Deno!</p>
    <Counter />
  </>);
}

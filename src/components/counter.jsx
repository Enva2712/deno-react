import React, { useState } from "https://unpkg.com/es-react@16.13.1/react.js";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>
    Clicked {count} times!
  </button>;
}

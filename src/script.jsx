import React, { useState } from "react";
import ReactDOM from "react-dom";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div class="container">
      <h1>Hello, {props.name}!</h1>
      <img className="logo" src="https://dev.livecodes.io/livecodes/assets/templates/react.svg" />
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
ReactDOM.render(<App name="React" />, document.querySelector("#app"));

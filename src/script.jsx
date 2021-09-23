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


function render(props) {
  const { container } = props;
  ReactDOM.render(<App {...props} />, container ? container.querySelector('#app') : document.querySelector('#app'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#app') : document.querySelector('#app'));
}

render({name: 'React'});
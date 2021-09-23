var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from "react";
import ReactDOM from "react-dom";
function App(props) {
    const [count, setCount] = useState(0);
    return (React.createElement("div", { class: "container" },
        React.createElement("h1", null,
            "Hello, ",
            props.name,
            "!"),
        React.createElement("img", { className: "logo", src: "https://dev.livecodes.io/livecodes/assets/templates/react.svg" }),
        React.createElement("p", null,
            "You clicked ",
            count,
            " times."),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "Click me")));
}
function render(props) {
    const { container } = props;
    ReactDOM.render(React.createElement(App, Object.assign({}, props)), container ? container.querySelector('#app') : document.querySelector('#app'));
}
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}
export function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('[react16] react app bootstraped');
    });
}
export function mount(props) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('[react16] props from main framework', props);
        render(props);
    });
}
export function unmount(props) {
    return __awaiter(this, void 0, void 0, function* () {
        const { container } = props;
        ReactDOM.unmountComponentAtNode(container ? container.querySelector('#app') : document.querySelector('#app'));
    });
}
render({ name: 'React' });

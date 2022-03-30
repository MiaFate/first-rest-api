import React, {Component} from "react";
import {render} from "react-dom";

/* class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }
} */
const element = React.createElement('div', {
    className: 'container',
    children: 'Hello World',
  })

render(element, document.getElementById("app"));
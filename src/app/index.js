//import React, {Component} from "react";
//import {render} from "react-dom";

/* class App extends Component {
    render() {
        return (
            <div>
                <h1>Hola Mundo!</h1>
                <h2>sad</h2>
            </div>
        );
    }
} */
/* const element = React.createElement('div', {
    className: 'container',
    children: 'Hello World',
  })
 */
  import React from 'react';
  import ReactDOM from 'react-dom';
  //import './index.css';
  import App from './App';
  
  
  ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
//render(<App/>, document.getElementById("app"));
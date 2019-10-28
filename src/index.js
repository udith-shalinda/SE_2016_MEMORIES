import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./app/components/app";

const rootEl = document.getElementById('root');

let render = () => ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl
);

if(module.hot){
  module.hot.accept(App, ()=>{
    setTimeout(render)
  })
}

render();

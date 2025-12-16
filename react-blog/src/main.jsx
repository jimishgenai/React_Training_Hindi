import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/globalStyles.css";
// import Provider from 'react-redux/es/components/Provider.js';
import {Provider} from 'react-redux';
import store from './store';


// Without Provider, Redux will NOT work.
ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  <Provider store={store}>
    <App />
  </Provider>
);

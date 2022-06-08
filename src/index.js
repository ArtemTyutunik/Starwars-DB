import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";
import App from "./components/app";
import {BrowserRouter as Router} from "react-router-dom";

import Store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>
);


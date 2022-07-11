import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './App.js'

import 'bootstrap/dist/js/bootstrap.min.js';

import './index.scss';

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
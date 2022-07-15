import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './App.js'

import 'bootstrap/dist/js/bootstrap.min.js';

import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
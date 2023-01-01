import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import "remixicon/fonts/remixicon.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

        <App />
 
    </BrowserRouter>
  </React.StrictMode>
);



//main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";             
import 'primeflex/primeflex.css';
import './style.scss';
import { createRoot } from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
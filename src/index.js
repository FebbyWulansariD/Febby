import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styling global
import App from './App'; // memanggil komponen utama App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* App.js akan dirender di sini */}
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'App/App';
import './css/index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename= 'my-react-practice'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

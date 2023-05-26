import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'App/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import './css/index.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename= 'my-react-practice'>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

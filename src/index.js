import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import './Styles/HomeCSS/HomeStyle.css';
import App from './AppSetting/App';
import reportWebVitals from './AppSetting/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

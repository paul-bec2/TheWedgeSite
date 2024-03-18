import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";

import "../node_modules/bootstrap/scss/bootstrap.scss";
// import "./assets/scss/paper-kit.scss?v=1.3.0";
// import "./assets/demo/demo.css?v=1.3.0";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/App">
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

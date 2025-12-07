import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/NoScrollbar.css';
import './styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
);
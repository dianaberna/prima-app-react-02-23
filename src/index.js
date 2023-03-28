import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Sono nel file index.js</p>
    <App />
  </React.StrictMode>
);
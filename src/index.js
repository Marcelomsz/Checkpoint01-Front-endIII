import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import App from '../src/container/App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);
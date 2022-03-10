import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';


// redux 
import { Provider } from 'react-redux';
import store from './redux/store/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      <App />

    </React.StrictMode>

  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
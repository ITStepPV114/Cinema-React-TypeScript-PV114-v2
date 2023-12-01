import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toast';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer position='top-center'/>
    </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// https://www.npmjs.com/package/react-toastify
// using npm install --save react-toastify
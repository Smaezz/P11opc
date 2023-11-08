import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import store from "./Redux/store"
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>            
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


//Provider va connecter le magasin à l'application React pour donner l'accés aux composants
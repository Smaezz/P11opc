import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(          
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);


//Provider va connecter le magasin à l'application React pour donner l'accés aux composants
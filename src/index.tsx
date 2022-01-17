import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import App from './App';

import { firebaseConfig } from 'firbase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDrgM2lN6UY8S_C8T44NjjpD51cFOkOjl8",
  authDomain: "vibe-7bd10.firebaseapp.com",
  databaseURL: "https://vibe-7bd10-default-rtdb.firebaseio.com",
  projectId: "vibe-7bd10",
  storageBucket: "vibe-7bd10.appspot.com",
  messagingSenderId: "1003181438257",
  appId: "1:1003181438257:web:14c20b02bded7ffe932c10",
  measurementId: "G-NT1W28FP1J"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

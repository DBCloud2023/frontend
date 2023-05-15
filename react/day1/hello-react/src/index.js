import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

function getCurrentDate() {
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const astazi = getCurrentDate();
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header azi={getCurrentDate} />
    <Hello />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

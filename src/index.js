import React from 'react';
import ReactDOM from 'react-dom/client';
import Countdown from './components/countdown/Countdown';
import Moda from './components/moda/Moda';
import Moments from './components/moments/Moments';
import Site from './components/sites/Site';
import Start from './components/start/Start';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Start />
    <Countdown />
    <Site />
    <Moments />
    {/* <Moda /> */}
    {/* <footer className="pt-3 mt-4 text-muted border-top text-center"> */}
    {/* &copy; 2022 */}
    {/* </footer> */}
    {/* </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


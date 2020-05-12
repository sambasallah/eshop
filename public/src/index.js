import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-slick/dist/react-slick';
// import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ReactGA from 'react-ga';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** Google Analytics */
function initializeReactGA() {
    ReactGA.initialize('UA-145120633-3');
    ReactGA.pageview('/');
    ReactGA.pageview('/shop');
    ReactGA.pageview('/about');
    ReactGA.pageview('/completed');
    ReactGA.pageview('/checkout');
  }
  
initializeReactGA();
  


ReactDOM.render(
<Router> 
    <App /> 
</Router>, 
    document.getElementById('root'));
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

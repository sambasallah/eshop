import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './assets/css/style.css';

/** Swiper */
// css
import 'swiper/css/swiper.css';

/** Pages */
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Product from './components/pages/ProductSingle';
import Contact from './components/pages/Contact';
import Checkout from './components/pages/Checkout';
import Error from './components/pages/Error';
import Cart from './components/pages/Cart';
import Success from './components/pages/Success';
import Auth from './components/pages/Auth';
import Account from './components/pages/Account';



/** Components */
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

/** Redux Provider */
import { Provider } from 'react-redux';

/** Store */
import store from './store';



const App = () => {
  return (
    <>
    <Provider store={store}>
    <Navbar></Navbar>
   <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/shop" component={Shop}></Route>
    <Route exact path="/shop/:page" render={(props) => <Shop {...props } />}></Route>
    <Route exact path="/about/" component={About}></Route>
    <Route exact path="/contact/" component={Contact}></Route>
    <Route exact path="/checkout/" component={Checkout}></Route>
    <Route exact path="/cart/" component={Cart}></Route>
    <Route exact path="/completed/" component={Success}></Route>
    <Route exact path="/auth/" component={Auth}></Route>
    <Route exact path="/account/" component={Account}></Route>
    <Route exact path="/:slug" component={Product}></Route>
    <Route component={Error}></Route>
   </Switch>
   </Provider>
   <Footer></Footer>
   
  </>
  
  );
}

export default App;
 
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

/** Pages */
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Product from './pages/ProductSingle';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Auth from './pages/Auth';
import Account from './pages/Account';

/** Components */
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return <>
    <Navbar></Navbar>
   <Switch>
     <Route exact path="/" component={Home}></Route>
    <Route exact path="/shop" component={Shop}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/product/:slug" component={Product}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/checkout" component={Checkout}></Route>
    <Route exact path="/cart" component={Cart}></Route>
    <Route exact path="/completed" component={Success}></Route>
    <Route exact path="/auth" component={Auth}></Route>
    <Route exact path="/account" component={Account}></Route>
    <Route component={Error}></Route>
   </Switch>
   <Footer></Footer>
  </>;
}

export default App;
 
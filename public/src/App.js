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
    <Route component={Error}></Route>
   </Switch>
   <Footer></Footer>
  </>;
}

export default App;
 
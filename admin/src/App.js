import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import Dashboard from './components/pages/Dashboard';
import Orders from './components/pages/Orders';
import Navbar from './components/inc/Navbar';
import Store from './components/pages/Store';
import Settings from './components/pages/Settings';
import SingleOrder from './components/pages/SingleOrder';
import AddProduct from './components/pages/AddProduct';
import EditProduct from './components/pages/EditProduct';

const App = () => {
  return (
    <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/orders" component={Orders}></Route>
          <Route exact path="/store" component={Store}></Route>
          <Route exact path="/store/:page" render={(props) => <Store {...props } />}></Route>
          <Route exact path="/settings" component={Settings}></Route>
          <Route exact path="/order/:order_id" render={(props) => <SingleOrder {...props} />}></Route>
          <Route exact path="/add-product" component={AddProduct}></Route>
          <Route exact path="/edit/:slug" component={EditProduct}></Route>
        </Switch>
    </div>
  );
}

export default App;

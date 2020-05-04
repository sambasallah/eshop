import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Redux Provider
import { Provider } from 'react-redux';

// Redux Store
import store from './store';

// Components
import Dashboard from './components/pages/Dashboard';
import Orders from './components/pages/Orders';
import Store from './components/pages/Store';
import Settings from './components/pages/Settings';
import SingleOrder from './components/pages/SingleOrder';
import AddProduct from './components/pages/AddProduct';
import EditProduct from './components/pages/EditProduct';
import Categories from './components/pages/Categories';
import AdminLogin from './components/pages/AdminLogin';

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
          <Switch>
            <Route exact path="/login" component={AdminLogin}></Route>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/orders" render={(props) => <Orders {...props} />}></Route>
            <Route exact path="/orders/:page" render={(props) => <Orders {...props} />}></Route>
            <Route exact path="/store" component={Store}></Route>
            <Route exact path="/store/:page" render={(props) => <Store {...props } />}></Route>
            <Route exact path='/categories' component={Categories}></Route>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/order/:order_id" render={(props) => <SingleOrder {...props} />}></Route>
            <Route exact path="/add-product" component={AddProduct}></Route>
            <Route exact path="/edit/:slug" component={EditProduct}></Route>
          </Switch>
        </Provider>
    </div>
  );
}

export default App;

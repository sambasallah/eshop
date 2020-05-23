import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

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
import Users from './components/pages/Users';
import AddUser from './components/pages/AddUser';


const isAuthenticated = () => {
  let token = localStorage.getItem('token');
  if(token) {
    return true;
  }
  return false;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    isAuthenticated()? (
      <Component {...props} />
    ) : (
      <Redirect to={{pathname: '/login'}} />
    )
  )} />
)

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
          <Switch>
                <Route exact path="/login" component={AdminLogin}></Route>
                <AuthRoute exact path="/" component={Dashboard} />
                <Route exact path="/orders" render={(props) => <Orders {...props} />} />
                <Route exact path="/orders/:page" render={(props) => <Orders {...props} />} />
                <AuthRoute exact path="/store" component={Store} />
                <AuthRoute exact path="/store/:page" render={(props) => <Store {...props } />} />
                <AuthRoute exact path='/categories' component={Categories} />
                <AuthRoute exact path="/settings" component={Settings} />
                <Route exact path="/order/:order_id" render={(props) => <SingleOrder {...props} />} />
                <AuthRoute exact path="/add-product" component={AddProduct} />
                <AuthRoute exact path="/edit/:slug" component={EditProduct} />
                <AuthRoute exact path="/users" component={Users} />
                <AuthRoute exact path="/add-user" component={AddUser} />
                <AuthRoute component={AdminLogin} />
          </Switch>
        </Provider>
    </div>
  );
}

export default App;

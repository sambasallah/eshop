import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import Dashboard from './components/pages/Dashboard';
import Orders from './components/pages/Orders';
import Navbar from './components/inc/Navbar';
import Store from './components/pages/Store';
import Settings from './components/pages/Settings';
import SingleOrder from './components/pages/SingleOrder';

const App = () => {
  return (
    <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/orders" component={Orders}></Route>
          <Route exact path="/store" component={Store}></Route>
          <Route exact path="/settings" component={Settings}></Route>
          <Route exact path="/order" component={SingleOrder}></Route>
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';

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
       <Dashboard />
       <Orders />
       <Store />
       <Settings />
       <SingleOrder />
    </div>
  );
}

export default App;

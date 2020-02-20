import React from 'react';
import Dashboard from './components/pages/Dashboard';
import Navbar from './components/inc/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
       <Navbar />
       <Dashboard />
    </div>
  );
}

export default App;

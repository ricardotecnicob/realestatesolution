import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router className="App">
        <Routes />
    </Router>
  );
}

export default App;

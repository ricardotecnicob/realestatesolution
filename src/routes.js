import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './panel/Dashboard';

export default function Rotas() {
  return (
    <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/dashboard" component={Dashboard} /> 
    </Switch>
  );
}

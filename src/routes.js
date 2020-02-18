import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ListaImoveis from './pages/ListaImoveis';
import ListaDetalhes from './pages/ListaDetalhes';

export default function Rotas() {
  return (
    <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/dashboard" component={Dashboard} /> 
        <Route path="/listimoveis" component={ListaImoveis} /> 
        <Route path="/detalhes/:id" component={ListaDetalhes} /> 
    </Switch>
  );
}

import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ListaImoveis from '../pages/ListaImoveis';
import ListaDetalhes from '../pages/ListaDetalhes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/listimoveis" component={ListaImoveis} isPrivate />
      <Route path="/detalhes/:id" component={ListaDetalhes} isPrivate />
    </Switch>
  )
}
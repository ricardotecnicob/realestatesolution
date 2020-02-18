import React from 'react';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import './config/ReactotronConfig';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter } from 'react-router-dom';

import history from "./services/history";
import Routes from './routes/index';

import { store, persistor } from './store';

import './App.css';

const App = props =>  (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;

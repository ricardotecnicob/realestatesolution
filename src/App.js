import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';
import './App.css';

const App = props =>  (
    <BrowserRouter className="App">
        <Rotas />
    </BrowserRouter>
);

export default App;

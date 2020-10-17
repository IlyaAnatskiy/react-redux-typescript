import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import { Navbar } from './components';
import { TodosPage, AboutPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={TodosPage} exact />
          <Route path="/" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

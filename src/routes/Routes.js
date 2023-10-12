import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WineCatalog from './components/WineCatalog';
import WineDetailsPage from '../pages/WineDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={WineCatalog} />
      <Route path="/wine/:id" component={WineDetailsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

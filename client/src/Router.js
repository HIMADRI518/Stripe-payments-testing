import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App.jsx';
import Checkout from './components/checkout/Checkout.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

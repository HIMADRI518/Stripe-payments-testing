import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import App from './App.jsx';
import Checkout from './components/checkout/Checkout.jsx';
import Success from './components/checkout/CheckoutSuccess.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/checkout/:itemId' component={Checkout} />
        <Route exact path='/success' component={Success} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

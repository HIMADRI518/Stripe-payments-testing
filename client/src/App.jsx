import React from 'react';

import Navigation from './layout/Navigation.jsx';
import Store from './components/storefront/Store.jsx';

const App = ({ history }) => {
  return (
    <div>
      <Navigation />
      <Store history={history} />
    </div>
  );
};

export default App;

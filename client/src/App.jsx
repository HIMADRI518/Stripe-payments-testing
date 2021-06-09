import React from 'react';

import Container from 'react-bootstrap/Container';

import Main from './layout/Main.jsx';
import Store from './components/storefront/Store.jsx';

const App = () => {
  return (
    <div>
      <Main />
      <Store />
    </div>
  );
};

export default App;

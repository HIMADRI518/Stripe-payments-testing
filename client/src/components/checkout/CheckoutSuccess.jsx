import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '../../layout/Navigation.jsx';
import Container from 'react-bootstrap/Container';

const CheckoutSuccess = ({ history }) => {
  return (
    <>
      <Navigation />
      <Container>
        <h1>Payment Successed</h1>
      </Container>
    </>
  );
};

export default CheckoutSuccess;

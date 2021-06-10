import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Navigation from '../../layout/Navigation.jsx';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const CheckoutSuccess = () => {
  let history = useHistory();
  return (
    <>
      <Navigation />
      <Container>
        <h1>Payment Successed</h1>
        <Button
          variant='secondary'
          onClick={() => {
            history.push('/');
          }}
        >
          Back to Shop
        </Button>
      </Container>
    </>
  );
};

export default CheckoutSuccess;

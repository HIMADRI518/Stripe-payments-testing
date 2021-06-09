import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm.jsx';

//import './Checkout.css';
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
  'pk_test_51J07VwFQUNksBCRsflc29BK3FcCXLZkxxlNVVo7ED7xr9TvAD6Mct2G3WsD0zoUp6U7ApBCYThU9ZgFNIKBIBq4I00KN5oFHaB'
);

const Checkout = () => {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;

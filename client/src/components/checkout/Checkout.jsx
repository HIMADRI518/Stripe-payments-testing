import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Navigation from '../../layout/Navigation.jsx';
import CheckoutForm from './CheckoutForm.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
  'pk_test_51J07VwFQUNksBCRsflc29BK3FcCXLZkxxlNVVo7ED7xr9TvAD6Mct2G3WsD0zoUp6U7ApBCYThU9ZgFNIKBIBq4I00KN5oFHaB'
);

const Checkout = () => {
  const [bookInfo, setBookInfo] = useState({});
  const [error, setError] = useState(null);

  let history = useHistory();
  const { itemId } = useParams();

  useEffect(() => {
    switch (itemId) {
      case '1':
        setBookInfo({
          id: 1,
          title: 'The Art of Doing Science and Engineering',
          amount: 2300,
        });
        break;
      case '2':
        setBookInfo({
          id: 2,
          title: 'The Making of Prince of Persia: Journals 1985-1993',
          amount: 2500,
        });

        break;
      case '3':
        setBookInfo({
          id: 3,
          title: 'Working in Public: The Making and Maintenance of Open Source',
          amount: 2800,
        });

        break;
      default:
        setError('No item selected');
        break;
    }
  }, [itemId]);

  return (
    <>
      <Navigation />
      <Container>
        <Row className='justify-content-md-center text-center'>
          <Col xs lg='6'>
            <div className='text-center' style={{ margin: '20px 0 40px 0' }}>
              <h1>Checkout - Stripe Press</h1>
              <p className='text-secondary'>
                {bookInfo.title || `No Book Selected`}
              </p>
              <hr />
              <p className='text-info'>
                {`Total Due: $${(
                  (bookInfo.amount ? bookInfo.amount : 0) / 100
                ).toFixed(2)}`}
              </p>
            </div>
            {error === null ? (
              <Elements stripe={promise}>
                <CheckoutForm bookInfo={bookInfo} />
              </Elements>
            ) : (
              <>
                <p className='text-center'>{error}</p>{' '}
                <Button
                  variant='secondary'
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  Back to Shop
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;

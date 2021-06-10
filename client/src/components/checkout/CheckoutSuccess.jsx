import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Navigation from '../../layout/Navigation.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CheckoutSuccess = () => {
  const [chargeObject, setChargeObject] = useState({});
  let history = useHistory();
  const { paymentId } = useParams();

  useEffect(() => {
    // Use the paymentId to retrieve the charge info
    window
      .fetch('/retrieve-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentId: paymentId }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChargeObject(data.chargeObject[0]);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs lg='6'>
            <div className='text-center' style={{ margin: '20px 0 40px 0' }}>
              {!chargeObject.id ? (
                <>
                  <h1>Charge Failed</h1>
                  <p className='text-secondary'>
                    You were not charged for this puchase. Please try your
                    purchase again.
                  </p>
                </>
              ) : (
                <>
                  <h1>Payment Processed!</h1>
                  <p className='text-secondary'>
                    You were charged{' '}
                    <strong>
                      $
                      {chargeObject.amount
                        ? (chargeObject.amount / 100).toFixed(2)
                        : '$0.00'}
                    </strong>{' '}
                    for your purchase of{' '}
                    <strong>
                      {chargeObject.description.split('Stripe Press: ')[1]}
                    </strong>
                    . Your receipt and e-book have been sent to the email you
                    provided at checkout.
                  </p>
                  <hr />
                  <p className='text-info'>
                    Your Charge ID is: <strong>{chargeObject.id}</strong>
                  </p>
                </>
              )}
              <Button
                variant='secondary'
                onClick={() => {
                  history.push('/');
                }}
              >
                Back to Shop
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckoutSuccess;

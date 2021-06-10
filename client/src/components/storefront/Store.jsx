import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import artScienceImg from '../../assets/art-science-eng.jpg';
import princePersiaImg from '../../assets/prince-of-persia.jpg';
import workingPublicImg from '../../assets/working-in-public.jpg';

const Store = ({ history }) => {
  return (
    <Container>
      <div className='text-center' style={{ margin: '20px 0 40px 0' }}>
        <h1>Stripe Press Shop</h1>
        <p className='text-secondary'>Select an item to purchase</p>
      </div>
      <Row>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={artScienceImg} />
            <Card.Body>
              <Card.Title>The Art of Doing Science and Engineering</Card.Title>
              <Card.Subtitle className='mt-2 text-muted'>
                <strong>Richard Hamming</strong>
              </Card.Subtitle>
              <Card.Text>
                The Art of Doing Science and Engineering is a reminder that a
                childlike capacity for learning and creativity are accessible to
                everyone.
              </Card.Text>
              <Button
                variant='primary'
                onClick={() => {
                  history.push('/checkout/1');
                }}
              >
                Purchase - $23
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={princePersiaImg} />
            <Card.Body>
              <Card.Title>
                The Making of Prince of Persia: Journals 1985-1993
              </Card.Title>
              <Card.Subtitle className='mt-2 text-muted'>
                <strong>Jordan Mechner</strong>
              </Card.Subtitle>
              <Card.Text>
                In The Making of Prince of Persia, on the 30th anniversary of
                the game’s release, Mechner looks back at the journals he kept
                from 1985 to 1993.
              </Card.Text>
              <Button
                variant='primary'
                onClick={() => {
                  history.push('/checkout/2');
                }}
              >
                Purchase - $25
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={workingPublicImg} />
            <Card.Body>
              <Card.Title>
                Working in Public: The Making and Maintenance of Open Source
              </Card.Title>
              <Card.Subtitle className='mt-2 text-muted'>
                <strong>Nadia Eghbal</strong>
              </Card.Subtitle>
              <Card.Text>
                Nadia Eghbal takes an inside look at modern open source and
                offers a model through which to understand the challenges faced
                by online creators.
              </Card.Text>
              <Button
                variant='primary'
                onClick={() => {
                  history.push('/checkout/3');
                }}
              >
                Purchase - $28
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Store;

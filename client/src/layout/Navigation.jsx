import React from 'react';

//Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' style={{ padding: '4px 10%' }}>
      <Navbar.Brand href='/'>Stripe Press</Navbar.Brand>
      <Navbar.Toggle
        aria-controls='basic-navbar-nav'
        className='justify-content-end'
      />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='#' disabled>
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

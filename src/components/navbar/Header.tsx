import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar bg='light' expand='lg' fixed='top' style={{  position: "sticky" }}>
        <Navbar.Brand href='/'>Portals</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' style={{ paddingRight: 10 }}>
            <Nav.Link href='/press'>Press</Nav.Link>
            <Nav.Link href='/legal'>Legal</Nav.Link>
            <Nav.Link href='/status'>Status</Nav.Link>
            <Nav.Link href='/docs'>Developer</Nav.Link>
            <Nav.Link className="businessButton" href='/database'>Business</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type='text' placeholder='Search' className='mr-sm-2' /> */}
            <a href="/signin">
            <Button variant='outline-success'>Sign In</Button>
            </a>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

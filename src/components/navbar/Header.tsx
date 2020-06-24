import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { AmplifySignOut } from '@aws-amplify/ui-react';

export default function Header() {
  return (
    <div>
      <AmplifySignOut />
      <Navbar bg='light' expand='lg' sticky='top'>
        <Navbar.Brand href='/home'>Portals</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/docs'>Docs</Nav.Link>
            <Nav.Link href='/database'>Database</Nav.Link>
            <Nav.Link href='/docs'>Page 2</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link href='/profile'>Profile</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type='text' placeholder='Search' className='mr-sm-2' /> */}
            <Button variant='outline-success'>Sign Out</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

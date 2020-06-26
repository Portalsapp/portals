import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import SignInForm from '../../components/signInForm/SignInForm';
import './MainScreen.css';
const banner: string = require('../../assets/banner.jpg');

export default function MainScreen() {
  return (
    <Container style={{ height: '100%' }}>
      <Row style={{ height: '100%' }} className="align-items-center">
        <Col className="align-items-center" xs={5}>
          <SignInForm />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Image src={banner}/>
        </Col>
      </Row>
    </Container>
  );
}

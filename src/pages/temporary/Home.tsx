import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from './Portals@3x.png';
import SignInForm from '../../components/signInForm/SignInForm';
import './MainScreen.css';
const banner: string = require('../../assets/banner.jpg');

export default function Home() {
  return (
    <div
      className="grad-background"
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Col style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <Image src={logo} rounded />
        <h1 style={{ fontFamily: 'Open Sans', fontSize: 36 }}>
          Coming Soon, Portalverse Inc.
        </h1>
      </Col>
    </div>
  );
}

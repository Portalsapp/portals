import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import './SignInForm.css';
import { Auth } from 'aws-amplify';

export async function signUp(email: string, fullName: string) {
  const params = {
    username: email,
    password: getRandomString(30),
    attributes: {
      name: fullName,
    },
  };
  await Auth.signUp(params);
}

function getRandomString(bytes: number) {
  const randomValues = new Uint8Array(bytes);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues).map(intToHex).join('');
}

function intToHex(nr: number) {
  return nr.toString(16).padStart(2, '0');
}

export default function SignInForm() {
  return (
    <>
      <div className='formContainer'>
        <Form>
          <h3>Create Account</h3>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Control placeholder='First Name' />
              </Col>
              <Col>
                <Form.Control placeholder='Last Name' />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Username' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Email or Phone Number' />
          </Form.Group>
          <Form.Group>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control as='select' custom>
                  {Array.from(Array(12)).map((x, i) => {
                    return <option>{i + 1}</option>;
                  })}
                </Form.Control>
              </Col>
              <Col>
                <Form.Control as='select' custom>
                  {Array.from(Array(31)).map((x, i) => {
                    return <option>{i + 1}</option>;
                  })}
                </Form.Control>
              </Col>
              <Col>
                <Form.Control as='select' custom>
                  {Array.from(Array(120)).map((x, i) => {
                    return <option>{2020 - i}</option>;
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>
          <Button variant='outline-primary' type='submit'>
            Submit
          </Button>
        </Form>
        <Form>
          <h3>Verification Code</h3>
          <Form.Label>Verification Code</Form.Label>
          <Form.Group>
            <Form.Control placeholder='4 Digit Code' />
          </Form.Group>
          <Button variant='outline-primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

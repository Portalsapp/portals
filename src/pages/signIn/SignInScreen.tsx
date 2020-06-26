import React from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { answerCustomChallenge } from '../../functions/Auth';

Amplify.configure({
  Auth: {
    region: 'us-west-2',
    userPoolId: 'us-west-2_YnQO6o0kV',
    userPoolWebClientId: '3jkncakt5up1ekpjj88k0mgmle',
  },
});

let cognitoUser: CognitoUser; // Track authentication flow state in this object
export async function signIn(email: string) {
  cognitoUser = await Auth.signIn(email);
}

const submitVerificationCode = () => {

}

export default function SignInScreen() {
  return (
    <Container style={{ height: '100%' }}>
      <Row
        className='justify-content-center align-items-center'
        style={{ height: '100%' }}
      >
        <Col xs={6} className='align-items-center'>
          <div className='formContainer'>
            <Form>
              <h3>Portals Sign In</h3>
              <Form.Group>
                <Form.Control placeholder='Email or Phone Number' />
              </Form.Group>
              <Form.Group>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button variant='outline-primary' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={6} className='align-items-center'>
          <div className='formContainer'>
            <Form>
              <h3>Verification Code</h3>
              <Form.Label>Verification Code</Form.Label>
              <Form.Group>
                <Form.Control placeholder='4 Digit Code' />
              </Form.Group>
              <Button
                variant='outline-primary'
                type='submit'
                onClick={() => submitVerificationCode()}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

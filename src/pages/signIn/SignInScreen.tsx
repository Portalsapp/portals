import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { answerCustomChallenge } from '../../functions/Auth';

type Inputs = {
  example: string,
  exampleRequired: string,
};

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


export default function SignInScreen() {
  const { register, handleSubmit, watch, errors, control } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <Container style={{ height: '100%' }}>
      <Row
        className='justify-content-center align-items-center'
        style={{ height: '100%' }}
      >
        <Col xs={6} className='align-items-center'>
          <div className='formContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Controller
                  as={<Form.Control type='text' placeholder='Username' />}
                  name='username'
                  control={control}
                  defaultValue=''
                />
              </Form.Group>
              <Form.Group>
                <Controller
                  as={<Form.Control type='email' placeholder='Email' />}
                  name='email'
                  control={control}
                  defaultValue=''
                  rules={{ required: true }}
                />
              </Form.Group>

              {/* include validation with required or other standard HTML validation rules */}
              <input
                name='exampleRequired'
                ref={register({ required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input type='submit' />
            </form>
          </div>
        </Col>
        <Col xs={6} className='align-items-center'>
          <div className='formContainer'></div>
        </Col>
      </Row>
    </Container>
  );
}

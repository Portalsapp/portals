import { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';

let cognitoUser: CognitoUser; // Track authentication flow state in this object
export async function answerCustomChallenge(answer: string) {
  // Send the answer to the User Pool
  // This will throw an error if it’s the 3rd wrong answer
  cognitoUser = await Auth.sendCustomChallengeAnswer(cognitoUser, answer);

  // It we get here, the answer was sent successfully,
  // but it might have been wrong (1st or 2nd time)
  // So we should test if the user is authenticated now
  try {
    // This will throw an error if the user is not yet authenticated:
    await Auth.currentSession();
  } catch {
    console.log('Apparently the user did not enter the right code');
  }
}

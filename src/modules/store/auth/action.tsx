import { SET_AUTH_STATUS, ActionTypes } from './types';

export function setAuthStatus(status: boolean): ActionTypes {
  return {
    type: SET_AUTH_STATUS,
    payload: status
  }
}
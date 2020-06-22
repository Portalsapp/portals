import { AuthState, SET_AUTH_STATUS, ActionTypes } from './types';

const initialState: AuthState = {
  loggedIn: false,
}

export function authReducer(
  state = initialState,
  action: ActionTypes
): AuthState {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        loggedIn: action.payload
      }
    default:
      return state
  }
}
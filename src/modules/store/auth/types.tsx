export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

interface SetAuthStatusAction {
  type: typeof SET_AUTH_STATUS;
  payload: boolean;
}

export interface AuthState {
  loggedIn: boolean,
}

export type ActionTypes = SetAuthStatusAction;

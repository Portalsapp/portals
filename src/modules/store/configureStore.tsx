import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}

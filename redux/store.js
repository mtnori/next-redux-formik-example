import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import Immutable from 'immutable';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/
const configureStore = (initialState = Immutable.Map({}), options) => {
  if (!initialState.toJS) initialState = Immutable.fromJS(initialState);
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  store.runSagaTask();
  return store;
};

export default function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(BaseComponent);
}

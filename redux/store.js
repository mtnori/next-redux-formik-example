import { createStore } from 'redux'

const reducer = (state = { foo: '' }, action) => {
  switch (action.type) {
    case 'FOO':
      return {
        ...state,
        foo: action.payload
      };
    default:
      return state;
  }
};

export function fooAction() {
  return {
    type: 'FOO',
    payload: 'test'
  }
}

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/
export const initStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

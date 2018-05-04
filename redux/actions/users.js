import * as users from '../constants/users';

export function fetch(id) {
  return {
    type: users.FETCH,
    payload: { id }
  };
}

export function fetchSuccess(data) {
  console.log('success');
  return {
    type: users.FETCH_SUCCESS,
    data
  };
}

export function fetchFailure(error) {
  console.log('failure');
  return {
    type: users.FETCH_FAILURE,
    error
  };
}

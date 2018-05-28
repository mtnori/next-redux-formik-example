import * as users from '../constants/users';

export function fetch(id) {
  return {
    type: users.FETCH,
    payload: { id }
  };
}

export function fetchSuccess(data) {
  return {
    type: users.FETCH_SUCCESS,
    data
  };
}

export function fetchFailure(error) {
  return {
    type: users.FETCH_FAILURE,
    error
  };
}

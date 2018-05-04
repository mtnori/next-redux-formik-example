import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH } from '../constants/users';
import { fetchSuccess, fetchFailure } from '../actions/users';
import * as API from '../apis/users';

function* fetchUser(action) {
  try {
    const user = yield call(API.getUser, action.payload);
    yield put(fetchSuccess(user));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export function* handleFetchUser() {
  yield takeEvery(FETCH, fetchUser);
}

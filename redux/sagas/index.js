import { fork } from 'redux-saga/effects';
import { handleFetchUser } from './users';

export default function* rootSaga() {
  yield fork(handleFetchUser);
}

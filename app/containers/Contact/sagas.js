import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { SUBMIT_CONTACT } from './constants';
import request, { buildOptions } from 'utils/request';
import {
  loading,
  submitContactSuccess,
  submitContactError,
} from './actions';

const API_URL = process.env.RENTGENE_API_URL;

function* submit(action) {
  yield put(loading());
  console.log(action)
  const requestURL = `${API_URL}/submitContact`;
  const response = yield call(request, requestURL, buildOptions({ message: action.message, email: action.email, username: action.username }));
  if (!response.err) {
    yield put(submitContactSuccess());
  } else {
    yield put(submitContactError());
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeEvery(SUBMIT_CONTACT, submit);
}

// All sagas to be loaded
export default [
  defaultSaga,
];

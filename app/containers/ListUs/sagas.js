import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request, { buildOptions } from 'utils/request';
import {
  SUBMIT_FORM,
} from './constants';
import {
  loading,
  submitFormSuccess,
  submitFormError,
} from './actions';
import { isEmpty } from 'lodash';
import {
  stopSubmit,
} from 'redux-form/immutable';

const API_URL = 'https://1ylns3kelg.execute-api.us-west-2.amazonaws.com/dev';


// Individual exports for testing
export function* defaultSaga() {
  return;
}

function* submit(action) {
  yield put(loading());
  const requestURL = `${API_URL}/createEntry`;
  const values = Object.assign(action.values, { type: 'us' });
  const response = yield call(request, requestURL, buildOptions({ values }));
  // const response = {err: "error"};
  if (!response.err) {
    if (isEmpty(response.data.errors)) {
      yield put(submitFormSuccess());
    } else {
      yield put(stopSubmit('ListUsForm', response.data.errors));
      yield put(submitFormError(response.data.errors));
    }
  } else {
    yield put(submitFormError(response.err));
  }
}

export function* watcher() {
  yield [
    takeEvery(SUBMIT_FORM, submit),
  ];
}

// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];

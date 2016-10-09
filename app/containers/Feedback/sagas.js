import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { SUBMIT_FEEDBACK } from './constants';
import request, { buildOptions } from 'utils/request';
import {
  loading,
  submitFeedbackSuccess,
  submitFeedbackError,
} from './actions';

const API_URL = process.env.RENTGENE_API_URL;

function* submit(action) {
  yield put(loading());
  const requestURL = `${API_URL}/submitFeedback`;
  const response = yield call(request, requestURL, buildOptions({ feedback: action.feedback }));
  if (!response.err) {
    yield put(submitFeedbackSuccess());
  } else {
    yield put(submitFeedbackError());
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeEvery(SUBMIT_FEEDBACK, submit);
}

// All sagas to be loaded
export default [
  defaultSaga,
];

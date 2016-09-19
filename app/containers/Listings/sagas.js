import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {
  loading,
  entriesLoaded,
  entriesLoadError,
} from './actions';
import request from 'utils/request';
import { LOAD_ENTRIES } from './constants';

const API_URL = process.env.RENTGENE_API_URL;

function* loadEntries(action) {
  let requestURL = `${API_URL}/getEntries`;
  requestURL += `?status=approved&type=${action.listType}&select=title,entryId,images,address`;
  yield put(loading());
  const fields = yield call(request, requestURL);
  if (!fields.err) {
    yield put(entriesLoaded(fields.data));
  } else {
    yield put(entriesLoadError(fields.err));
  }
}


function* watcher() {
  yield [
    takeEvery(LOAD_ENTRIES, loadEntries),
  ];
}

// Individual exports for testing
export function* defaultSaga() {
  return;
}

// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];

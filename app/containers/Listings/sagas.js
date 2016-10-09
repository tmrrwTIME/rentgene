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
  const selects = [
    'title',
    'entryId',
    'images',
    'amount',
    'beds',
    'baths',
    'squareFeet',
    'address',
    'address1',
    'address2',
    'lat',
    'lng',
  ];
  requestURL += `?status=approved&type=${action.listType}`;
  requestURL += '&index=type-createdAt-index';
  requestURL += `&select=${selects.join(',')}`;
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

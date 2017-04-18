import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request from 'utils/request';
import { LOAD_ENTRY } from './constants';
import { SUBMIT_FLAG_LISTING } from './constants';
import {
  loading,
  loadEntrySuccess,
  loadEntryError,
  submitFeedbackSuccess,
  submitFeedbackError,
} from './actions';

// const API_URL = process.env.RENTGENE_API_URL;
const API_URL = 'https://1ylns3kelg.execute-api.us-west-2.amazonaws.com/dev';
console.log(API_URL);

// https://1ylns3kelg.execute-api.us-west-2.amazonaws.com/
function* fetchEntry(action) {
  yield put(loading());
  const selects = [
    'title',
    'address',
    'city',
    'state',
    'zipcode',
    'amount',
    'baths',
    'beds',
    'contactEmail',
    'contactName',
    'createdAt',
    'day',
    'description',
    'entryId',
    'images',
    'leaseDuration',
    'months',
    'parking',
    'pets',
    'phone',
    'price',
    'rentType',
    'split',
    'status',
    'type',
    'lat',
    'lng',
    'balcony',
    'fireplace',
    'storage',
    'furnished',
    'sublet',
    'washerInUnit',
    'guarontorsAccepted',
    'washerDryerInBuilding',
    'loft',
    'diswasher',
    'elevator',
    'gym',
    'pool',
    'roof',
    'yard',
    'doorman',
    'electric',
    'water',
    'gas',
    'trash',
    'utilitiesIncluded',
    'squareFeet',
  ];
  let requestURL = `${API_URL}/getEntry`;
  requestURL += `?entryId=${action.entryId}&select=${selects.join(',')}`;
  const entry = yield call(request, requestURL);
  if (!entry.err) {
    yield put(loadEntrySuccess(entry.data));
  } else {
    yield put(loadEntryError(entry.err));
  }
}

function* submit(action) {
  yield put(loading());
  const requestURL = `${API_URL}/flagListing`;
  const response = yield call(request, requestURL, buildOptions({ flagMessage: action.flagMessage }));
  if (!response.err) {
    yield put(submitFlagListingSuccess());
  } else {
    yield put(submitFlagListingError());
  }
}

function* watcher() {
  yield [
    takeEvery(LOAD_ENTRY, fetchEntry),
  ];
}

export function* defaultSaga() {
  // TODO: get entry information using url token
}
// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];

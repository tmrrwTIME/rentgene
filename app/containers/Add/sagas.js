import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { refresh as refreshProperty } from 'containers/ListProperty/actions';
import { refresh as refreshRooms } from 'containers/ListRooms/actions';
import { refresh as refreshUs } from 'containers/ListUs/actions';


function* resetForm() {
  yield put(refreshProperty());
  yield put(refreshRooms());
  yield put(refreshUs());
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeEvery(LOCATION_CHANGE, resetForm);
}

// All sagas to be loaded
export default [
  defaultSaga,
];

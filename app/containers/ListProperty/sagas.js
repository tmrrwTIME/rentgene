import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request, { simpleRequest } from 'utils/request';
import {
  loading,
  stopLoading,
} from './actions';
import {
  UPLOAD_FILE,
  REMOVE_FILE,
} from './constants';
import {
  arrayRemove,
  arrayPush,
  arrayPop,
  stopSubmit,
  setSubmitFailed,
  change,
} from 'redux-form';
const API_URL = process.env.RENTGENE_API_URL;

export function* remove(action) {
  const idx = parseInt(action.idx, 10);
  yield put(arrayRemove('ListApartmentForm', 'images', idx));
}

export function* uploadFileToS3(action) {
  yield put(loading());
  const file = action.files[0];
  const stateField = 'images';
  let signedUrl = `${API_URL}/getSignedUrl`;
  signedUrl += `?filename=${stateField}/${file.name}&filetype=${file.type}`;
  const signedUrlResponse = yield call(request, signedUrl);

  if (!signedUrlResponse.err) {
    const uploadURL = signedUrlResponse.data.url;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    };
    yield put(arrayPush('ListApartmentForm', stateField, { preview: file.preview, uploading: true, name: file.name }));
    const uploadResponse = yield call(simpleRequest, uploadURL, options);
    if (uploadResponse.data.status === 200) {
      yield put(arrayPop('ListApartmentForm', stateField));
      yield put(arrayPush('ListApartmentForm', stateField, { preview: file.preview, uploading: false, name: file.name }));
      yield put(stopLoading());
    } else {
      yield put(stopLoading());
    }
  } else {
    yield put(stopLoading());
  }
}

// Individual exports for testing
export function* defaultSaga() {
  return;
}

export function* watcher() {
  yield [
    takeEvery(UPLOAD_FILE, uploadFileToS3),
    takeEvery(REMOVE_FILE, remove),
  ];
}

// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];

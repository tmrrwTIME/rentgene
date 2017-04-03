import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request, { simpleRequest, buildOptions } from 'utils/request';
import {
  loading,
  stopLoading,
  submitFormSuccess,
  submitFormError,
} from './actions';
import {
  UPLOAD_FILE,
  REMOVE_FILE,
  SUBMIT_FORM,
  CHANGE_IMAGE,
} from './constants';
import {
  arraySwap,
  touch,
  arrayPush,
  arrayPop,
  arrayUnshift,
  stopSubmit,
  arrayInsert,
  arrayRemove
} from 'redux-form';
import { isEmpty } from 'lodash';
import uuidV4 from 'uuid/v4';

const API_URL = process.env.RENTGENE_API_URL;
let swaps = 0;

export function* remove(action) {
  const idx = parseInt(action.idx, 10);
  yield put(arrayRemove('ListApartmentForm', 'images', idx));
}

export function* changeImage(action){
  console.log('this was saga talking');
  const files = action.files
  const idx = action.idx
  const direction = action.direction
  var add
  direction == 'left' ? add = -1 : add = +1;

  const falseImg = {preview:false}
  var prev = files[idx+add]
  var current = files[idx]

  yield put(arraySwap('ListApartmentForm', 'images', idx, idx+add))
  if (swaps == 0){
    yield put(arrayPush('ListApartmentForm', 'images', falseImg))
    swaps++
  } else {
    yield put(arrayPop('ListApartmentForm', 'images'))
    swaps = 0
  }

}

export function* uploadFileToS3(action) {
  yield put(loading());
  const file = action.files;
  const fileName = uuidV4();
  const stateField = 'images';
  let signedUrl = `${API_URL}/getSignedUrl`;
  signedUrl += `?filename=${stateField}/${fileName}&filetype=${file.type}`;
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
    yield put(arrayPush('ListApartmentForm', stateField, { preview: file.preview, uploading: true, name: fileName }));
    const uploadResponse = yield call(simpleRequest, uploadURL, options);
    if (uploadResponse.data.status === 200) {
      yield put(arrayPop('ListApartmentForm', stateField));
      if (swaps != 0){
        yield put(arrayPop('ListApartmentForm', stateField))
        swaps = 0
      }
      yield put(arrayUnshift('ListApartmentForm', stateField, { preview: file.preview, uploading: false, name: fileName }));
      yield put(stopLoading());
    } else {
      yield put(stopLoading());
    }
  } else {
    yield put(stopLoading());
  }
}

function* submit(action) {
  yield put(loading());
  const requestURL = `${API_URL}/createEntry`;
  const values = action.values;
  values.type = `${values.type}s`;
  const response = yield call(request, requestURL, buildOptions({ values }));
  if (!response.err) {
    if (isEmpty(response.data.errors)) {
      yield put(submitFormSuccess());
    } else {
      yield put(stopSubmit('ListApartmentForm', response.data.errors));
      yield put(submitFormError(response.data.errors));
    }
  } else {
    yield put(submitFormError(response.err));
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
    takeEvery(CHANGE_IMAGE, changeImage),
    takeEvery(SUBMIT_FORM, submit),
  ];
}

// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];

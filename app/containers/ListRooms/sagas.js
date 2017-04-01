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
  arrayShift,
  arrayUnshift,
  arrayPop,
  stopSubmit,
  arrayInsert,
  arrayRemove
} from 'redux-form';
import { isEmpty } from 'lodash';

const API_URL = process.env.RENTGENE_API_URL;
let swaps = 0;

export function* remove(action) {
  const idx = parseInt(action.idx, 10);
  yield put(arrayRemove('ListRoomsForm', 'images', idx));
}
export function* changeImage(action){
  const files = action.files
  const idx = action.idx
  const direction = action.direction
  var add
  direction == 'left' ? add = -1 : add = +1;

  const falseImg = {preview:false}
  var prev = files[idx+add]
  var current = files[idx]

  yield put(arraySwap('ListRoomsForm', 'images', idx, idx+add))
  if (swaps == 0){
    yield put(arrayPush('ListRoomsForm', 'images', falseImg))
    swaps++
  } else {
    yield put(arrayPop('ListRoomsForm', 'images'))
    swaps = 0
  }

}

export function* uploadFileToS3(action) {
  yield put(loading());
  console.log(action);
  // const file = action.files[0];
  // console.log('This is action >', action);
  // console.log(ListRoomsForm);
  const file = action.files
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
    yield put(arrayPush('ListRoomsForm', stateField, { preview: file.preview, uploading: true, name: file.name }));
    const uploadResponse = yield call(simpleRequest, uploadURL, options);
    if (uploadResponse.data.status === 200) {
      yield put(arrayPop('ListRoomsForm', stateField));
      if (swaps != 0){
        yield put(arrayPop('ListRoomsForm', stateField))
        swaps = 0
      }

      yield put(arrayUnshift('ListRoomsForm', stateField, { preview: file.preview, uploading: false, name: file.name }));
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

function* submit(action) {
  yield put(loading());
  const requestURL = `${API_URL}/createEntry`;
  const values = action.values;
  // const values = Object.assign(action.values, { type: 'rooms' });
  values.type = 'rooms';
  console.log(values);
  const response = yield call(request, requestURL, buildOptions({ values }));
  if (!response.err) {
    if (isEmpty(response.data.errors)) {
      yield put(submitFormSuccess());
    } else {
      yield put(stopSubmit('ListRoomsForm', response.data.errors));
      yield put(submitFormError(response.data.errors));
    }
  } else {
    yield put(submitFormError(response.err));
  }

}

export function* watcher() {
  yield [
    takeEvery(UPLOAD_FILE, uploadFileToS3),
    takeEvery(CHANGE_IMAGE, changeImage),
    takeEvery(REMOVE_FILE, remove),
    takeEvery(SUBMIT_FORM, submit),
  ];
}

// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];

/*
 *
 * ListRooms actions
 *
 */

import {
  DEFAULT_ACTION,
  LOADING,
  STOP_LOADING,
  UPLOAD_FILE,
  REMOVE_FILE,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  REFRESH,
  CHANGE_IMAGE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}
export function changeImage(files, idx, direction){
  return {
    type: CHANGE_IMAGE,
    files,
    idx,
    direction
  };
}
export function uploadFile(files) {
  return {
    type: UPLOAD_FILE,
    files,
  };
}

export function removeFile(idx) {
  return {
    type: REMOVE_FILE,
    idx,
  };
}

export function submitForm(values) {
  return {
    type: SUBMIT_FORM,
    values,
  };
}

export function submitFormSuccess(errors) {
  return {
    type: SUBMIT_FORM_SUCCESS,
    errors,
  };
}

export function submitFormError(errors) {
  return {
    type: SUBMIT_FORM_ERROR,
    errors,
  };
}

export function refresh() {
  return {
    type: REFRESH,
  };
}

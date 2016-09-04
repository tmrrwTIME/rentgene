/*
 *
 * ListRooms actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_FORM,
  LOADING,
  STOP_LOADING,
  UPLOAD_FILE,
  REMOVE_FILE,
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

export function submitForm(values) {
  return {
    type: SUBMIT_FORM,
    values,
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

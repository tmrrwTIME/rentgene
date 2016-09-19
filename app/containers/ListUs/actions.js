/*
 *
 * ListUs actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_FORM,
  LOADING,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  REFRESH,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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

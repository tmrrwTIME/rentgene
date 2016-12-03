/*
 *
 * Contact actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_FEEDBACK,
  LOADING,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function submitContact(feedback) {
  return {
    type: SUBMIT_FEEDBACK,
    feedback,
  };
}

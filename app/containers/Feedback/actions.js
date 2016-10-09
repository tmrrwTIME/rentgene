/*
 *
 * Feedback actions
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

export function submitFeedback(feedback) {
  return {
    type: SUBMIT_FEEDBACK,
    feedback,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function submitFeedbackSuccess() {
  return {
    type: SUBMIT_FEEDBACK_SUCCESS,
  };
}

export function submitFeedbackError() {
  return {
    type: SUBMIT_FEEDBACK_ERROR,
  };
}

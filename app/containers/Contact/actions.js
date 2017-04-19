/*
 *
 * Contact actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_CONTACT,
  LOADING,
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_ERROR,
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

export function submitContact(message, email, username) {
  return {
    type: SUBMIT_CONTACT,
    message,
    email,
    username
  };
}

export function submitContactSuccess(){
  return {
    type: SUBMIT_CONTACT_SUCCESS
  };
}

export function submitContactError(){
  return {
    type: SUBMIT_CONTACT_ERROR
  }
}
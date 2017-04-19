/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOADING,
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  submitted: false,
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADING:
      return state.set('loading', true);
    case SUBMIT_CONTACT_SUCCESS:
      return state
        .set('submitted', true)
        .set('loading', false);
    case SUBMIT_CONTACT_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default contactReducer;

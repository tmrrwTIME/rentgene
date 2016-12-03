/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOADING,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_ERROR,
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
    case SUBMIT_FEEDBACK_SUCCESS:
      return state
        .set('submitted', true)
        .set('loading', false);
    case SUBMIT_FEEDBACK_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default contactReducer;

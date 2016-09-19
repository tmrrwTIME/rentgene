/*
 *
 * ListUs reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  LOADING,
  REFRESH,
} from './constants';

const initialState = fromJS({
  loading: false,
  submitted: false,
});

function listUsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADING:
      return state.set('loading', true);
    case SUBMIT_FORM_SUCCESS:
      return state
        .set('submitted', true)
        .set('loading', false);
    case SUBMIT_FORM_ERROR:
      return state
        .set('loading', false)
        .set('errors', fromJS(action.errors));
    case REFRESH:
      return state.set('submitted', false);
    default:
      return state;
  }
}

export default listUsReducer;

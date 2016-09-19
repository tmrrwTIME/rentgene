/*
 *
 * DetailView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOADING,
  LOAD_ENTRY_SUCCESS,
  LOAD_ENTRY_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  entry: {},
  error: '',
});

function detailViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADING:
      return state.set('loading', true);
    case LOAD_ENTRY_SUCCESS:
      return state
        .set('loading', false)
        .set('entry', fromJS(action.entry));
    case LOAD_ENTRY_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default detailViewReducer;

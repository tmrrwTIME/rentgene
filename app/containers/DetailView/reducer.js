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
  SUBMIT_FLAG_LISTING_SUCCESS,
  SUBMIT_FLAG_LISTING_ERROR,
  RESET_SUBMITTED_FLAG,
} from './constants';

const initialState = fromJS({
  loading: false,
  entry: {},
  error: '',
  flagListingSubmitted: false,
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
        .set('entry', fromJS(action.entry))
    case LOAD_ENTRY_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case SUBMIT_FLAG_LISTING_SUCCESS:
      return state
        .set('flagListingSubmitted', true)
        // .set('entry', fromJS(action.entry))
        .set('loading', false);
    case SUBMIT_FLAG_LISTING_ERROR:
      return state
        .set('flagListingSubmitted', true)
        // .set('entry', fromJS(action.entry))
        .set('loading', false);
    case RESET_SUBMITTED_FLAG:
      return state
        .set('flagListingSubmitted', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default detailViewReducer;

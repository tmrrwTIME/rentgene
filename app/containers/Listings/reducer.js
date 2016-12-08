/*
 *
 * Listings reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOADING,
  ENTRIES_LOADED,
  ENTRIES_LOADED_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  entries: [],
  error: '',
});

function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADING:
      return state.set('loading', true);
    case ENTRIES_LOADED:

      var entries = action.entries.filter((entry)=>{
        if (entry.status != 'approved'){
          return false
        }
        return true
      })

      return state
        .set('loading', false)
        .set('entries', fromJS(entries));
    case ENTRIES_LOADED_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default listingsReducer;

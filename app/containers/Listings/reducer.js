/*
 *
 * Listings reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOADING,
  LOADING_MORE,
  ENTRIES_LOADED,
  ENTRIES_LOADED_MORE,
  ENTRIES_LOADED_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  entries: [],
  totalEntries: 0,
  loadingMore: true,
  error: '',
});

function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADING:
      return state.set('loading', true);
    case LOADING_MORE:
      return state.set('loadingMore', true);
    case ENTRIES_LOADED:

      var entries = action.entries.filter((entry)=>{
        if (entry.status != 'approved'){
          return false
        }
        return true
      })
      console.log("listingsReduce ENTRIES_LOADED")

      var jsState = state.toJS();
      return fromJS(Object.assign({}, jsState, {
        loading: false,
        totalEntries: action.total,
        loadingMore: false,
        entries: [...jsState.entries, ...entries]
      }))
    case ENTRIES_LOADED_MORE:
      var entries = action.entries.filter((entry)=>{
        if (entry.status != 'approved'){
          return false
        }
        return true
      })
      console.log("listingsReduce LOAD_MORE")
      var jsState = state.toJS();
      return fromJS(Object.assign({}, jsState, {
        loadingMore: false,
        entries: [...jsState.entries, ...entries]
      }))
    case ENTRIES_LOADED_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default listingsReducer;

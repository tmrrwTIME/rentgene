/*
 *
 * Blog reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_BLOGS,
  FETCH_BLOGS_FAILURE,
  FETCH_BLOGS_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  blogs: [],
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_BLOGS:
      return state.set('loading', true);
    case FETCH_BLOGS_SUCCESS:
      return state
        .set('loading', false)
        .set('blogs', fromJS(action.blogs));
    case FETCH_BLOGS_FAILURE:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default blogReducer;

/*
 *
 * Blog actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchBlogs() {
  return {
    type: FETCH_BLOGS,
  };
}

export function fetchBlogsSuccess(blogs) {
  return {
    type: FETCH_BLOGS_SUCCESS,
    blogs,
  };
}

export function fetchBlogsFailure() {
  return {
    type: FETCH_BLOGS_FAILURE,
  };
}

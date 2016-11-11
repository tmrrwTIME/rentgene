import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchBlogsSuccess, fetchBlogsFailure } from './actions';

const API_URL = 'https://1ylns3kelg.execute-api.us-west-2.amazonaws.com/dev';

// Individual exports for testing
export function* defaultSaga() {
  let requestURL = `${API_URL}/getBlogs`;
  requestURL += '?status=published';
  requestURL += '&select=title,createdAt,body,image,blogId&order=desc';
  requestURL += '&index=status-createdAt-index';
  const blogs = yield call(request, requestURL);
  if (!blogs.err) {
    yield put(fetchBlogsSuccess(blogs.data));
  } else {
    yield put(fetchBlogsFailure());
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

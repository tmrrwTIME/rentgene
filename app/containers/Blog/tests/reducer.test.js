import expect from 'expect';
import blogReducer from '../reducer';
import { fromJS } from 'immutable';

describe('blogReducer', () => {
  it('returns the initial state', () => {
    expect(blogReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import expect from 'expect';
import termsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('termsPageReducer', () => {
  it('returns the initial state', () => {
    expect(termsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

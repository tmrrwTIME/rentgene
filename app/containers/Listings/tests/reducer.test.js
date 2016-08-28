import expect from 'expect';
import listingsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('listingsReducer', () => {
  it('returns the initial state', () => {
    expect(listingsReducer(undefined, {})).toEqual(fromJS({}));
  });
});

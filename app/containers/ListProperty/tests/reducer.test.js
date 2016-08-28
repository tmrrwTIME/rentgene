import expect from 'expect';
import listPropertyReducer from '../reducer';
import { fromJS } from 'immutable';

describe('listPropertyReducer', () => {
  it('returns the initial state', () => {
    expect(listPropertyReducer(undefined, {})).toEqual(fromJS({}));
  });
});

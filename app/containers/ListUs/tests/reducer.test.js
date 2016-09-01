import expect from 'expect';
import listUsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('listUsReducer', () => {
  it('returns the initial state', () => {
    expect(listUsReducer(undefined, {})).toEqual(fromJS({}));
  });
});

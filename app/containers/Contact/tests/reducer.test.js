import expect from 'expect';
import contactReducer from '../reducer';
import { fromJS } from 'immutable';

describe('contactReducer', () => {
  it('returns the initial state', () => {
    expect(contactReducer(undefined, {})).toEqual(fromJS({}));
  });
});

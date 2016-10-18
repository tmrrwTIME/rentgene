import expect from 'expect';
import termsAndConditionsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('termsAndConditionsPageReducer', () => {
  it('returns the initial state', () => {
    expect(termsAndConditionsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

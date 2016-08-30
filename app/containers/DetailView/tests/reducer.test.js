import expect from 'expect';
import detailViewReducer from '../reducer';
import { fromJS } from 'immutable';

describe('detailViewReducer', () => {
  it('returns the initial state', () => {
    expect(detailViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});

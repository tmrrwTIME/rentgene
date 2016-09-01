import expect from 'expect';
import listRoomsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('listRoomsReducer', () => {
  it('returns the initial state', () => {
    expect(listRoomsReducer(undefined, {})).toEqual(fromJS({}));
  });
});

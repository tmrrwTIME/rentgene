import expect from 'expect';
import feedbackReducer from '../reducer';
import { fromJS } from 'immutable';

describe('feedbackReducer', () => {
  it('returns the initial state', () => {
    expect(feedbackReducer(undefined, {})).toEqual(fromJS({}));
  });
});

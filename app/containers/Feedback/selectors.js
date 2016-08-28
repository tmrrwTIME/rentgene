import { createSelector } from 'reselect';

/**
 * Direct selector to the feedback state domain
 */
const selectFeedbackDomain = () => state => state.get('feedback');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Feedback
 */

const selectFeedback = () => createSelector(
  selectFeedbackDomain(),
  (substate) => substate.toJS()
);

export default selectFeedback;
export {
  selectFeedbackDomain,
};

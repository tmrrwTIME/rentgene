import { createSelector } from 'reselect';

/**
 * Direct selector to the termsAndConditionsPage state domain
 */
const selectTermsAndConditionsPageDomain = () => state => state.get('termsAndConditionsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TermsAndConditionsPage
 */

const selectTermsAndConditionsPage = () => createSelector(
  selectTermsAndConditionsPageDomain(),
  (substate) => substate.toJS()
);

export default selectTermsAndConditionsPage;
export {
  selectTermsAndConditionsPageDomain,
};

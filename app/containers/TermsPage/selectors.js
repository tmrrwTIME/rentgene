import { createSelector } from 'reselect';

/**
 * Direct selector to the termsPage state domain
 */
const selectTermsPageDomain = () => state => state.get('termsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TermsPage
 */

const selectTermsPage = () => createSelector(
  selectTermsPageDomain(),
  (substate) => substate.toJS()
);

export default selectTermsPage;
export {
  selectTermsPageDomain,
};

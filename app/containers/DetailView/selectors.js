import { createSelector } from 'reselect';

/**
 * Direct selector to the detailView state domain
 */
const selectDetailViewDomain = () => state => state.get('detailView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DetailView
 */

const selectDetailView = () => createSelector(
  selectDetailViewDomain(),
  (substate) => substate.toJS()
);

export default selectDetailView;
export {
  selectDetailViewDomain,
};

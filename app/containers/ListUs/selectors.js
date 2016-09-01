import { createSelector } from 'reselect';

/**
 * Direct selector to the listUs state domain
 */
const selectListUsDomain = () => state => state.get('listUs');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListUs
 */

const selectListUs = () => createSelector(
  selectListUsDomain(),
  (substate) => substate.toJS()
);

export default selectListUs;
export {
  selectListUsDomain,
};

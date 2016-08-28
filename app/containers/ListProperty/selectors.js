import { createSelector } from 'reselect';

/**
 * Direct selector to the listProperty state domain
 */
const selectListPropertyDomain = () => state => state.get('listProperty');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListProperty
 */

const selectListProperty = () => createSelector(
  selectListPropertyDomain(),
  (substate) => substate.toJS()
);

export default selectListProperty;
export {
  selectListPropertyDomain,
};

import { createSelector } from 'reselect';

/**
 * Direct selector to the listings state domain
 */
const selectListingsDomain = () => state => state.get('listings');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Listings
 */

const selectListings = () => createSelector(
  selectListingsDomain(),
  (substate) => substate.toJS()
);

export default selectListings;
export {
  selectListingsDomain,
};

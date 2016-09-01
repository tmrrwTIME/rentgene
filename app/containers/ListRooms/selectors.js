import { createSelector } from 'reselect';

/**
 * Direct selector to the listRooms state domain
 */
const selectListRoomsDomain = () => state => state.get('listRooms');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListRooms
 */

const selectListRooms = () => createSelector(
  selectListRoomsDomain(),
  (substate) => substate.toJS()
);

export default selectListRooms;
export {
  selectListRoomsDomain,
};

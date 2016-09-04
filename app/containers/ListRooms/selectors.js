import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
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

const globalState = () => state => state;
const formSelector = formValueSelector('ListRoomsForm');

const selectFormValues = () => createSelector(
  globalState(),
  (state) => {
    let images = formSelector(state, 'images');
    images = images ? images.toArray() : [];
    return { images };
  }
);

const selectListRooms = () => createSelector(
  selectListRoomsDomain(),
  selectFormValues(),
  (substate, formValues) => ({
    ...substate.toJS(),
    formValues,
  }),
);

export default selectListRooms;
export {
  selectListRoomsDomain,
  selectFormValues,
};

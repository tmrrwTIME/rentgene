import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

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

const globalState = () => state => state;
const formSelector = formValueSelector('ListApartmentForm');

const selectFormValues = () => createSelector(
 globalState(),
 (state) => {
   let images = formSelector(state, 'images');
   images = images ? images.toArray() : [];
   return { images };
 }
);

const selectListProperty = () => createSelector(
 selectListPropertyDomain(),
 selectFormValues(),
 (substate, formValues) => ({
   ...substate.toJS(),
   formValues,
 }),
);

export default selectListProperty;
export {
  selectListPropertyDomain,
};

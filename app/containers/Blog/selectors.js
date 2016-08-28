import { createSelector } from 'reselect';

/**
 * Direct selector to the blog state domain
 */
const selectBlogDomain = () => state => state.get('blog');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Blog
 */

const selectBlog = () => createSelector(
  selectBlogDomain(),
  (substate) => substate.toJS()
);

export default selectBlog;
export {
  selectBlogDomain,
};

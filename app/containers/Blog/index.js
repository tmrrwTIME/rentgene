/*
 *
 * Blog
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBlog from './selectors';
import styles from './styles.css';

export class Blog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.blog}>
      <Helmet
        title="Blog"
        meta={[
          { name: 'description', content: 'Description of Blog' },
        ]}
      />
      </div>
    );
  }
}

const mapStateToProps = selectBlog();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

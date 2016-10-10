/*
 *
 * TermsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectTermsPage from './selectors';
import styles from './styles.css';

export class TermsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.termsPage}>
        <Helmet
          title="TermsPage"
          meta={[
            { name: 'description', content: 'Description of TermsPage' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectTermsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsPage);

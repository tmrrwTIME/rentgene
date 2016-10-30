/*
 *
 * TermsAndConditionsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectTermsAndConditionsPage from './selectors';
import styles from './styles.css';

export class TermsAndConditionsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.termsAndConditionsPage}>
        <Helmet
          title="Terms And Conditions"
          meta={[
            { name: 'description', content: '' },
          ]}
        />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
              <h2>Terms</h2>
              <p>Our goal here at rentgene is to provide you with a pleasant apartment searching experience. We do all that we can to ensure no scams and no poor quality listings infiltrate this website. However, we do recognize there is 0.000001 chance of some don juan, mona lisa art thief scam artist making their way onto the website and therefore have to state that we here at rentgene are not responsible for anything that happens on this website. Please use your common sense when searching for a place to live. If something seems too good to be true, it probably is.</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectTermsAndConditionsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditionsPage);

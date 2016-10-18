/*
 *
 * Contact
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectContact from './selectors';
import styles from './styles.css';

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.contact}>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Description of Contact' },
          ]}
        />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className={styles.text}>
              <h3>Contact Us</h3>
            </div>
            <div>
              <input type="text" className="form-control" placeholder="Name" required />
            </div>
            <div>
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <textarea className={`${styles.textarea} form-control`} rows="8" cols="40" required></textarea>
            <button className="btn btn-xs">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectContact();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

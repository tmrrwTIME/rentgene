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
              <p>Contact us any reason possible</p>
              <p>Your message will go directly</p>
              <p>to the founders!</p>
            </div>
            <br />
            <br />
            <div>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <textarea rows="8" cols="40" className="form-control"></textarea>
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

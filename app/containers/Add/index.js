/*
 *
 * Add
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AddImage from 'assets/images/add2.jpg';
import { Link } from 'react-router';


import styles from './styles.css';

export class Add extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Add"
          meta={[
            { name: 'description', content: 'Description of Add' },
          ]}
        />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className={styles.add}>
              <div className={`col-sm-6 ${styles.type}`}>
                <div className={styles.head}>
                  Submit a listing yourself
                </div>
                <p>
                  <b>Apartments or Houses</b>
                  <br /> by owner, broker, management or tenant
                  breaking lease
                </p>
                <div className="text-center">
                  <Link className={`btn btn-xs ${styles.button}`} to={'/add/apartment'}>Make your listing!</Link>
                </div>
                <br />
                <p>
                  <b>Rooms</b> <br />
                  do you have a room for rent
                </p>
                <div className="text-center">
                  <Link className={`btn btn-xs ${styles.button}`} to={'/add/rooms'}>Make your listing!</Link>
                </div>
              </div>
              <div className={`col-sm-6 ${styles.type}`}>
                <div className={styles.head}>
                  Have us come out to you
                </div>
                <p>
                  Have us come, take photos,
                  and list your place for you
                  Free of Charge!s
                </p>
                <div className="text-center">
                  <Link className={`btn btn-xs ${styles.button}`} to={'/add/us'}>
                    Have us come!
                  </Link>
                </div>
                <img src={AddImage} alt="" className={styles.image} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Add);

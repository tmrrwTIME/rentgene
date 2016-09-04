/*
 *
 * Add
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AddImage from 'assets/images/add.jpg';
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
                <Link className={styles.head} to={'/'}>
                  Submit a listing yourself
                </Link>
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
                <Link className={styles.head} to={'/'}>
                  Have us come out to you
                </Link>
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
                <br />
                <img src={AddImage} alt="" className={styles.image} />
              </div>
            </div>
          </div>
        </div>
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

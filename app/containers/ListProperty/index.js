/*
 *
 * ListProperty
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectListProperty from './selectors';
import CameraImage from 'assets/images/camera.png';


import styles from './styles.css';

export class ListProperty extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { params } = this.props;
    let listingForm = '';
    if (params.type === 'us') {
      listingForm = (
        <div className="row">
          <div className="col-sm-9">
            <p className={styles.fetText}>
              We come out to you, take perfect photos,
              get all the info we need. Then list your place
              Free of charge!!
            </p>
            <p>Just fill out the your info and pick a time and date within 3 days of today.</p>
            <div className={styles.border}>
              <div className={styles.content}>
                <div className={styles.title}>
                  property type
                </div>
                <select className={`form-control input-sm ${styles.select}`}>
                  <option>type</option>
                </select>
              </div>
              <div className={styles.content}>
                <div>
                  Address
                </div>
                <div>
                  <input type="text" className="form-control input-sm" placeholder="street" />
                  <input type="text" className="form-control input-sm" placeholder="city" />
                </div>
                <div>
                  <input type="text" className="form-control input-sm" placeholder="state" />
                  <input type="text" className="form-control input-sm" placeholder="zipcode" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className={styles.content}>
                    <div>
                      Name
                    </div>
                    <div>
                      <input type="text" style={{ width: '40%' }} className="form-control input-sm" placeholder="first" />
                      <input type="text" style={{ width: '40%' }} className="form-control input-sm" placeholder="last" />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div>
                      Phone Number
                    </div>
                    <div>
                      <input type="text" className="form-control input-sm" />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div>
                      Email
                    </div>
                    <div>
                      <input type="text" className="form-control input-sm" />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div>
                      are you a
                    </div>
                    <select className={`form-control input-sm ${styles.select}`}>
                      <option>land a lord</option>
                    </select>
                  </div>
                  <div className={styles.content}>
                    <div>
                      pick a time slot for us to come
                    </div>
                    <select className={`form-control input-sm ${styles.select}`}>
                      <option>Date</option>
                    </select>
                    <select className={`form-control input-sm ${styles.select}`}>
                      <option>Time</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img className="img-responsive" src={CameraImage} alt="" />
                </div>
              </div>
            </div>
            <hr />
            <div className="text-center">
              <button className="btn">Preview and submit</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title="ListProperty"
          meta={[
            { name: 'description', content: 'Description of ListProperty' },
          ]}
        />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            {listingForm}
          </div>
        </div>
      </div>
    );
  }
}

ListProperty.propTypes = {
  params: React.PropTypes.object.isRequired,
};

const mapStateToProps = selectListProperty();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProperty);

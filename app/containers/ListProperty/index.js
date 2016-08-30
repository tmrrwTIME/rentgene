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
    if (params.type === 'apartments') {
      listingForm = (
        <div>
          <p className="text-center">Fill out everything for your listing 100% accurate! Everything must be filled out for you to submit your listing</p>
          <div className="row">
            <div className="col-sm-8">
              <div className={styles.drag}>
                <h4>Drag & Drop</h4>
                <h6>Photos upload</h6>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Description</h4>
                <textarea className="form-control" rows="8" cols="40" placeholder="Fill out everything for your listing 100% accurate! Everything must"></textarea>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Parking</h4>
                <div className={`radio ${styles.checkbox}`}>
                  <label>
                    <input type="radio" name="parking" /> Yes
                  </label>
                </div>
                <div className={`checkbox ${styles.checkbox}`}>
                  <label>
                    <input type="radio" name="parking" /> No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.content}>
                <div>
                  <input type="text" className="form-control input-sm" placeholder="Make a nice title" style={{ width: '100%' }} />
                </div>
                <div>
                  <input type="text" className="form-control input-sm" placeholder="Street adress, City zip code" />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" className="form-control input-sm" placeholder="Price" />
                  </div>
                  <div className="col-sm-6">
                    <div>first/last rent?</div>
                    <div className={`radio ${styles.checkbox}`}>
                      <label>
                        <input type="radio" name="rentType" /> Yes
                      </label>
                    </div>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="radio" name="rentType" /> No
                      </label>
                    </div>
                  </div>
                </div>

                <div>Deposit</div>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" className="form-control input-sm" placeholder="Amount" />
                  </div>
                </div>
                <select className="form-control input-sm" name="">
                  <option value="">beds</option>
                </select>
                <select className="form-control input-sm" name="">
                  <option value="">baths</option>
                </select>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Contact</h4>
                <div>
                  <div className={styles.title}>Name</div>
                  <input type="text" className="form-control input-sm" />
                </div>
                <div>
                  <div className={styles.title}>Email</div>
                  <input type="text" className="form-control input-sm" />
                </div>
                <div>
                  <div className={styles.title}>Phone</div>
                  <input type="text" className="form-control input-sm" />
                </div>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>When Is it Avalible</h4>
                <select className="form-control input-sm" name="">
                  <option value="">Months</option>
                </select>
                <select className="form-control input-sm" name="">
                  <option value="">Day</option>
                </select>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Utilities</h4>
                <div className="radio">
                  <label>
                    <input type="radio" name="utilities" /> Split
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="utilities" /> incl
                  </label>
                </div>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Duration</h4>
                <div className="radio">
                  <label>
                    <input type="radio" name="duration" /> Month to month
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="duration" /> 6 month
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (params.type === 'rooms') {
      listingForm = (
        <div>
          <p className="text-center">Fill out everything for your listing 100% accurate! Everything must be filled out for you to submit your listing</p>
          <div className="row">
            <div className="col-sm-8">
              <div className={styles.drag}>
                <h4>Drag & Drop</h4>
                <h6>Photos upload</h6>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Description</h4>
                <textarea className="form-control" rows="8" cols="40" placeholder="Fill out everything for your listing 100% accurate! Everything must"></textarea>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Amenities</h4>
                <div className={styles.listCheckbox}>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Balcony
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Fireplace
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Storage Available
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Furnished
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Sublet
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Washer/dryer in unit
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Guarontors Accepted
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Washer/Dryer in Building
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Loft
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Dishwasher
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Sublet
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Elevator
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Gym
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Pool
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Roof
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Yard
                      </label>
                    </div>
                  </div>
                  <div className={`col-sm-4 ${styles.listItem}`}>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="checkbox" name="amenities" /> Doorman
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Pets</h4>
                <div className={`radio ${styles.checkbox}`}>
                  <label>
                    <input type="radio" name="pets" /> Yes
                  </label>
                </div>
                <div className={`checkbox ${styles.checkbox}`}>
                  <label>
                    <input type="radio" name="pets" /> No
                  </label>
                </div>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Parking</h4>
                <div className={`radio ${styles.checkbox}`}>
                  <label>
                    <input type="radio" name="parking" /> Yes
                  </label>
                </div>
                <div className={`checkbox ${styles.checkbox}`}>
                  <label>
                    <input type="radio" name="parking" /> No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.content}>
                <div>
                  <input type="text" className="form-control input-sm" placeholder="Make a nice title" style={{ width: '100%' }} />
                </div>
                <div>
                  <input type="text" className="form-control input-sm" placeholder="Street adress, City zip code" />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" className="form-control input-sm" placeholder="Price" />
                  </div>
                  <div className="col-sm-6">
                    <div>first/last rent?</div>
                    <div className={`radio ${styles.checkbox}`}>
                      <label>
                        <input type="radio" name="rentType" /> Yes
                      </label>
                    </div>
                    <div className={`checkbox ${styles.checkbox}`}>
                      <label>
                        <input type="radio" name="rentType" /> No
                      </label>
                    </div>
                  </div>
                </div>

                <div>Deposit</div>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" className="form-control input-sm" placeholder="Amount" />
                  </div>
                </div>
                <select className="form-control input-sm" name="">
                  <option value="">beds</option>
                </select>
                <select className="form-control input-sm" name="">
                  <option value="">baths</option>
                </select>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>Contact</h4>
                <div>
                  <div className={styles.title}>Name</div>
                  <input type="text" className="form-control input-sm" />
                </div>
                <div>
                  <div className={styles.title}>Email</div>
                  <input type="text" className="form-control input-sm" />
                </div>
                <div>
                  <div className={styles.title}>Phone</div>
                  <input type="text" className="form-control input-sm" />
                </div>
              </div>
              <div className={styles.content}>
                <h4 className={styles.normalTitle}>When Is it Avalible</h4>
                <select className="form-control input-sm" name="">
                  <option value="">Months</option>
                </select>
                <select className="form-control input-sm" name="">
                  <option value="">Day</option>
                </select>
              </div>
              <div className={styles.content}>
                <div className="row">
                  <div className={`col-sm-6 ${styles.borderRight}`}>
                    <h4 className={styles.normalTitle}>Utilities <small>incl</small></h4>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="utilities" /> Electric
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="utilities" /> Water
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="utilities" /> Gas
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="utilities" /> Trash
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className={styles.normalTitle}>Lease Duration</h4>
                    min. <select className="form-control input-sm" name="">
                      <option value="">lease</option>
                    </select>
                  </div>
                </div>
              </div>
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

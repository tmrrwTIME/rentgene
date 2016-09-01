/*
 *
 * ListRooms
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectListRooms from './selectors';
import { Field, reduxForm } from 'redux-form/immutable';
import styles from './styles.css';
import Input from 'components/Input';
import Select from 'components/Select';

export class ListRooms extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.listRooms}>
        <Helmet
          title="ListRooms"
          meta={[
            { name: 'description', content: 'Description of ListRooms' },
          ]}
        />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form onSubmit={handleSubmit}>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ListRooms.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

const mapStateToProps = selectListRooms();

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      console.log(values); // eslint-disable-line
      // dispatch(submitForm(values.toJS()));
    },
    dispatch,
  };
}
const listRooms = reduxForm({
  form: 'ListRoomsForm',
})(ListRooms);

export default connect(mapStateToProps, mapDispatchToProps)(listRooms);

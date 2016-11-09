/*
 *
 * ListProperty
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import selectListProperty from './selectors';
import { Field, reduxForm, SubmissionError, stopSubmit } from 'redux-form/immutable';
import Input from 'components/Input';
import Select from 'components/Select';
import Dropzone from 'react-dropzone';
import ThankView from 'components/ThankView';
import { uploadFile, removeFile, submitForm } from './actions';
import SizeImage from 'assets/images/size.png';
import validate from './validate';
import { isEmpty } from 'lodash';
import { SearchBox } from "react-google-maps";

const beds = ['', 1, 2, 3, 4, 5, 6, 7];
const leaseDuration = ['lease', 'Month to Month', '6 months', '1 year'];
const months = ['Months', 'Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31];

import styles from './styles.css';

export class ListProperty extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    function load(url) {
      return new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      })
    }

    load('https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyA1vQdzV7nTSFUe2klAEgwpokdsA9aDpzU')
      .then(function() {
        console.log('Loaded!');
        var input = document.getElementById('search')
        console.log(input);
        console.log(google.maps);
        var searchBox = new google.maps.places.SearchBox(input)
      })
      .catch(function(err) {
        console.error('Something went wrong!', err);
    })
  }
  render() {
    const { handleSubmit, formValues, handleFileRemove, submitted, loading } = this.props;
    let imagesBlock = '';
    if (formValues.images && formValues.images.length) {
      imagesBlock = (
        <div className={styles.drag}>
          <div className="row">
              {formValues.images.map((image, i) => {
                const key = `images-${i}`;
                if (image.uploading) {
                  return (
                    <div key={key} className="col-sm-3">
                      <div className={styles.thumb}>
                        <div
                          className={`${styles.thumbMain} ${styles.load}`}
                        >
                          <i className="fa fa-spinner fa-pulse fa-fw"></i>
                        </div>
                        <img src={SizeImage} className={styles.size} alt="" />
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={key} className="col-sm-3">
                    <div className={styles.thumb}>
                      <button type="button" onClick={handleFileRemove} className={`btn ${styles.thumbButton}`} data-idx={i}>
                        <i className="fa fa-times"></i>
                      </button>
                      <div className={styles.thumbMain}>
                        <img className={styles.image} src={image.preview} alt="" />
                      </div>
                      <img src={SizeImage} className={styles.size} alt="" />
                    </div>
                  </div>
                );
              })}
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
          {submitted ? <ThankView /> : <div className="col-md-8 col-md-offset-2">
            <form onSubmit={handleSubmit}>
              <div>
                <p className="text-center">Fill out everything for your listing 100% accurate! Everything must be filled out for you to submit your listing</p>
                <br />
                <br />
                <div className="row">
                  <div className="col-sm-8">
                    <p>*Must upload 8 photos minimum, but more is better!</p>
                    <Dropzone
                      onDrop={this.props.handleDrop}
                      accept="image/*"
                      style={{ width: '100%' }}
                    >
                      <div className={styles.drag}>
                        <div className={styles.dragText}>
                          <div>
                            <h4>Drag & Drop</h4>
                            <h6>Photos upload</h6>
                          </div>
                        </div>
                      </div>
                    </Dropzone>
                    {imagesBlock}
                    <div className={styles.content}>
                      <h4 className={styles.normalTitle}>Description</h4>
                      <Field
                        type="text"
                        required
                        name="description"
                        className="form-control"
                        component="textarea"
                        rows="8"
                        cols="40"
                        placeholder="Fill out everything for your listing 100% accurate! Everything must"
                      />
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.normalTitle}>Amenities</h4>
                      <div className={styles.listCheckbox}>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="balcony">
                              <Field name="balcony" component="input" type="checkbox" /> Balcony
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="fireplace">
                              <Field name="fireplace" component="input" type="checkbox" /> Fireplace
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="storage">
                              <Field name="storage" component="input" type="checkbox" /> Storage Available
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="furnished">
                              <Field name="furnished" component="input" type="checkbox" /> Furnished
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="sublet">
                              <Field name="sublet" component="input" type="checkbox" /> Sublet
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="washerInUnit">
                              <Field name="washerInUnit" component="input" type="checkbox" /> Washer/dryer in unit
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="guarontorsAccepted">
                              <Field name="guarontorsAccepted" component="input" type="checkbox" /> Guarontors Accepted
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="washerDryerInBuilding">
                              <Field name="washerDryerInBuilding" component="input" type="checkbox" /> Washer/Dryer in Building
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="loft">
                              <Field name="loft" component="input" type="checkbox" /> Loft
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="diswasher">
                              <Field name="diswasher" component="input" type="checkbox" /> Dishwasher
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="elevator">
                              <Field name="elevator" component="input" type="checkbox" /> Elevator
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="gym">
                              <Field name="gym" component="input" type="checkbox" /> Gym
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="pool">
                              <Field name="pool" component="input" type="checkbox" /> Pool
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="roof">
                              <Field name="roof" component="input" type="checkbox" /> Roof
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="yard">
                              <Field name="yard" component="input" type="checkbox" /> Yard
                            </label>
                          </div>
                        </div>
                        <div className={`col-sm-4 ${styles.listItem}`}>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="doorman">
                              <Field name="doorman" component="input" type="checkbox" /> Doorman
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.normalTitle}>Pets</h4>
                      <div className={`radio ${styles.checkbox}`}>
                        <label htmlFor="pets" style={{ marginRight: 10 }}>
                          <Field name="pets" component="input" type="radio" value="yes" required /> Yes
                        </label>
                      </div>
                      <div className={`radio ${styles.checkbox}`}>
                        <label htmlFor="pets" style={{ marginRight: 10 }}>
                          <Field name="pets" component="input" type="radio" value="no" required /> No
                        </label>
                      </div>
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.normalTitle}>Parking</h4>
                      <div className={`radio ${styles.checkbox}`}>
                        <label htmlFor="parking" style={{ marginRight: 10 }}>
                          <Field name="parking" component="input" type="radio" value="yes" required /> Yes
                        </label>
                      </div>
                      <div className={`radio ${styles.checkbox}`}>
                        <label htmlFor="parking" style={{ marginRight: 10 }}>
                          <Field name="parking" component="input" type="radio" value="no" required /> No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className={styles.content}>
                      <br />
                      <Field
                        name="type"
                        className="form-control input-sm"
                        component={Select}
                        items={['type', 'apartment', 'house']}
                        firstEmpty
                        required
                      />
                      <input
                        type='text'
                        id='search'
                        placeholder='address'
                        className={`${styles.searchBox} form-control input-sm`}
                      />
                      <div className="row">
                        <div className="col-sm-6">
                          <Field
                            type="number"
                            required
                            name="price"
                            className="form-control input-sm"
                            placeholder="Price"
                            component={Input}
                          />
                        </div>
                        <div className="col-sm-6">
                          <div>first/last rent?</div>
                          <div className={`radio ${styles.checkbox}`}>
                            <label htmlFor="rentType">
                              <Field name="rentType" component="input" type="radio" value="yes" required /> Yes
                            </label>
                          </div>
                          <div className={`checkbox ${styles.checkbox}`}>
                            <label htmlFor="rentType">
                              <Field name="rentType" component="input" type="radio" value="no" required /> No
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <Field
                            type="number"
                            required
                            name="squareFeet"
                            className="form-control input-sm"
                            placeholder="Square feet"
                            component={Input}
                          />
                        </div>
                      </div>
                      <br />
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.normalTitle}>Contact</h4>
                      <div>
                        <div className={styles.title} style={{ float: 'left' }}>Name</div>
                        <Field
                          type="text"
                          required
                          name="contactName"
                          className="form-control input-sm"
                          component={Input}
                        />
                      </div>
                      <div>
                        <div className={styles.title} style={{ float: 'left' }}>Email</div>
                        <Field
                          type="text"
                          name="contactEmail"
                          className="form-control input-sm"
                          component={Input}
                        />
                      </div>
                      <div>
                        <div className={styles.title} style={{ float: 'left' }}>Phone</div>
                        <Field
                          type="text"
                          required
                          name="phone"
                          className="form-control input-sm"
                          component={Input}
                        />
                      </div>

                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.normalTitle}>When Is it Avalible</h4>
                      <Field
                        style={{ float: 'left' }}
                        name="months"
                        className={`form-control input-sm ${styles.select}`}
                        component={Select}
                        items={months}
                        firstEmpty
                        required
                      />
                      <Field
                        name="day"
                        className={`form-control input-sm ${styles.select}`}
                        component={Select}
                        items={days}
                        firstEmpty
                        required
                      />
                    </div>
                    <div>
                      <div>Deposit</div>
                      <div className="row">
                        <div className="col-sm-6">
                          <Field
                            type="number"
                            required
                            name="amount"
                            className="form-control input-sm"
                            placeholder="Amount"
                            component={Input}
                          />
                        </div>
                      </div>
                      <span style={{ float: 'left', marginRight: 5 }}>Beds</span>
                      <Field
                        style={{ float: 'left', marginRight: 5 }}
                        name="beds"
                        className={`form-control input-sm ${styles.select}`}
                        component={Select} items={beds}
                        required
                      />
                      <span style={{ float: 'left', marginRight: 5 }}>Baths</span>
                      <Field
                        name="baths"
                        className={`form-control input-sm ${styles.select}`}
                        component={Select}
                        items={beds}
                          required
                        />
                      </div>
                      <div className={styles.content}>
                        <div className="row">
                          <div className={`col-sm-6 ${styles.borderRight}`}>
                            <h4 className={styles.normalTitle}>Utilities <small>incl</small></h4>
                            <div className="checkbox">
                              <label htmlFor="electric">
                                <Field name="electric" component="input" type="checkbox" /> Electric
                              </label>
                            </div>
                            <div className="checkbox">
                              <label htmlFor="water">
                                <Field name="water" component="input" type="checkbox" /> Water
                              </label>
                            </div>
                            <div className="checkbox">
                              <label htmlFor="gas">
                                <Field name="gas" component="input" type="checkbox" /> Gas
                              </label>
                            </div>
                            <div className="checkbox">
                              <label htmlFor="trash">
                                <Field name="trash" component="input" type="checkbox" /> Trash
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <h4 className={styles.normalTitle}>Lease Duration</h4>
                            <span style={{ float: 'left' }}>min.</span>
                            <Field
                              style={{ width: 75 }}
                              name="leaseDuration"
                              className={`form-control input-sm ${styles.select}`}
                              component={Select}
                              items={leaseDuration}
                              firstEmpty
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="text-center">
                  <button className="btn" disabled={loading}>
                    {loading ? <i className="fa fa-spinner fa-spin"></i> : ''}
                    Submit
                  </button>
                </div>
              </form>
            </div>}
        </div>
      </div>
    );
  }
}

ListProperty.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleDrop: React.PropTypes.func.isRequired,
  handleFileRemove: React.PropTypes.func,
  formValues: React.PropTypes.object,
  submitted: React.PropTypes.bool,
  loading: React.PropTypes.bool,
};

const mapStateToProps = selectListProperty();

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      const errors = validate(values);
      if (!isEmpty(errors)) {
        if (errors.images) {
          alert(errors.images); // eslint-disable-line
        }
        dispatch(stopSubmit('ListApartmentForm', errors));
        throw new SubmissionError(errors);
      } else {
        dispatch(submitForm(values.toJS()));
      }
    },
    handleFileRemove: (e) => {
      dispatch(removeFile(e.currentTarget.dataset.idx));
    },
    handleDrop: (files) => {
      if (files.length) {
        dispatch(uploadFile(files));
      }
    },
    dispatch,
  };
}

const listApartment = reduxForm({
  form: 'ListApartmentForm',
})(ListProperty);

export default connect(mapStateToProps, mapDispatchToProps)(listApartment);

/*
 *
 * ListRooms
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectListRooms from './selectors';
import { Field, reduxForm, stopSubmit, SubmissionError } from 'redux-form/immutable';
import styles from './styles.css';
import Input from 'components/Input';
import Select from 'components/Select';
import Dropzone from 'react-dropzone';
import { uploadFile, removeFile, submitForm } from './actions';
import SizeImage from 'assets/images/size.png';
import ThankView from 'components/ThankView';
import { isEmpty } from 'lodash';
import validate from './validate';


const beds = ['', 1, 2, 3, 4, 5, 6, 7];
const leaseDuration = ['lease', 'Month to Month', '6 months', '1 year'];
const months = ['Months', 'Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31];

export class ListRooms extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, formValues, handleFileRemove, loading, submitted } = this.props;
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
      <div className={styles.listRooms}>
        <Helmet
          title="ListRooms"
          meta={[
            { name: 'description', content: 'Description of ListRooms' },
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
                      <p>*Must upload 5 photos minimum, but more is better!</p>
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

                    </div>
                    <div className="col-sm-4">
                      <div className={styles.content}>
                        <Field
                          type="text"
                          required
                          name="title"
                          className="form-control input-sm"
                          placeholder="Make a nice title"
                          component={Input}
                          style={{ width: '100%' }}
                        />
                        <Field
                          type="text"
                          required
                          name="city"
                          className="form-control input-sm"
                          placeholder="city"
                          component={Input}
                          style={{ width: '100%' }}
                        />
                        <Field
                          type="text"
                          required
                          name="state"
                          className="form-control input-sm"
                          placeholder="state"
                          component={Input}
                          style={{ width: '100%' }}
                        />
                        <Field
                          type="number"
                          required
                          name="zipcode"
                          className="form-control input-sm"
                          placeholder="zipcode"
                          component={Input}
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
                              required
                            />
                          </div>
                        </div>
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
                            required
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
                      <div className={styles.content}>
                        <div className="row">
                          <div className={`col-sm-6 ${styles.borderRight}`}>
                            <h4 className={styles.normalTitle}>Utilities <small>incl</small></h4>
                            <div className={`radio ${styles.checkbox}`}>
                              <label htmlFor="rentType">
                                <Field name="utilitiesIncluded" component="input" type="radio" value="yes" required /> Yes
                              </label>
                            </div>
                            <div className={`checkbox ${styles.checkbox}`}>
                              <label htmlFor="rentType">
                                <Field name="utilitiesIncluded" component="input" type="radio" value="no" required /> No
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
              </form></div>}
        </div>
      </div>
    );
  }
}

ListRooms.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleDrop: React.PropTypes.func.isRequired,
  handleFileRemove: React.PropTypes.func,
  formValues: React.PropTypes.object,
  loading: React.PropTypes.bool,
  submitted: React.PropTypes.bool,
};

const mapStateToProps = selectListRooms();

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      const errors = validate(values);
      if (!isEmpty(errors)) {
        if (errors.images) {
          alert(errors.images); // eslint-disable-line
        }
        dispatch(stopSubmit('ListRoomsForm', errors));
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
const listRooms = reduxForm({
  form: 'ListRoomsForm',
})(ListRooms);

export default connect(mapStateToProps, mapDispatchToProps)(listRooms);

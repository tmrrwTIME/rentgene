/*
 *
 * ListUs
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectListUs from './selectors';
import { Field, reduxForm } from 'redux-form/immutable';
import styles from './styles.css';
import CameraImage from 'assets/images/camera.png';
import Input from 'components/Input';
import Select from 'components/Select';
import { submitForm } from './actions';

const propertyTypes = ['choose', 'Room', 'Apartment', 'House'];

export class ListUs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    console.log('Loaded!');
    var input = document.getElementById('search');
    var searchBox = new google.maps.places.SearchBox(input);
  }
  render() {
    const { handleSubmit, submitted, loading } = this.props;
    const thankView = (
      <div className="col-md-4 col-md-offset-4">
        <br />
        <br />
        <div>
          <div className={styles.alert}>
            <p className="text-center" style={{ paddingLeft: 30, paddingRight: 30 }}>
              Thank you! we will be contacting you soon to confirm!
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
    return (
      <div className={styles.listUs}>
        <Helmet
          title="ListUs"
          meta={[
            { name: 'description', content: 'Description of ListUs' },
          ]}
        />
        <div className="row">
          {submitted ? thankView : <div className="col-md-8 col-md-offset-2">
            <form onSubmit={handleSubmit}>
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
                      <div className={styles.title} style={{ float: 'left' }}>
                        property type
                      </div>
                      <Field
                        name="propertyType"
                        className={`form-control input-sm ${styles.select}`}
                        component={Select}
                        items={propertyTypes}
                        validate={(value) => { 
                          if(!value) return "required"  
                        }}
                        required
                        firstEmpty
                      />
                    </div>
                    <div className={styles.content}>
                      <div>
                        Address
                      </div>
                      <div>
                        <input
                          type='text'
                          id='search'
                          placeholder='address'
                          className={`${styles.searchBox} form-control input-sm`}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <div className={styles.content}>
                          <div>
                            Name
                          </div>
                          <div>
                            <Field
                              type="text"
                              validate={(value) => { 
                                if(!value) return "required"  
                              }}
                              required
                              name="first"
                              className="form-control input-sm"
                              placeholder="first"
                              component={Input}
                              style={{ float: 'left', width: '40%' }}
                            />
                            <Field
                              type="text"
                              validate={(value) => { 
                                if(!value) return "required"  
                              }}
                              required
                              name="last"
                              className="form-control input-sm"
                              placeholder="last"
                              component={Input}
                              style={{ width: '40%' }}
                            />
                          </div>
                        </div>
                        <div className={styles.content}>
                          <div>
                            Phone Number
                          </div>
                          <Field
                            type="text"
                            validate={(value) => { 
                              if(!value) return "required"  
                            }}
                            required
                            name="mobile"
                            className="form-control input-sm"
                            component={Input}
                          />
                        </div>
                        <div className={styles.content}>
                          <div>
                            Email
                          </div>
                          <Field
                            type="email"
                            validate={(value) => { 
                              if(!value) return "required"  
                            }}
                            required
                            name="email"
                            className="form-control input-sm"
                            component={Input}
                          />
                        </div>
                        <div className={styles.content}>
                          <div>
                            are you a
                          </div>
                          <Field 
                            name="whom" 
                            className={`form-control input-sm ${styles.select}`} 
                            component={Select} 
                            validate={(value) => { 
                              if(!value) return "required"  
                            }}
                            firstEmpty
                            required
                            value="land a lord"
                            items={['', 'land a lord', 'tenant']} 
                            />
                        </div>
                        <div className={styles.content}>
                          <div>
                            We will call you to schedule a time!
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <img className="img-responsive" src={CameraImage} alt="" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-center">
                    <button className="btn" disabled={loading}>
                      {loading ? <i className="fa fa-spinner fa-spin"></i> : ''}
                      Preview and submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>}
        </div>
      </div>
    );
  }
}

ListUs.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  submitted: React.PropTypes.bool.isRequired,
};

const mapStateToProps = selectListUs();

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      dispatch(submitForm(values.toJS()));
    },
    dispatch,
  };
}

const listUs = reduxForm({
  form: 'ListUsForm',
  initialValues: {
    city: 'Los Angeles',
    state: 'CA',
  }
})(ListUs);

export default connect(mapStateToProps, mapDispatchToProps)(listUs);

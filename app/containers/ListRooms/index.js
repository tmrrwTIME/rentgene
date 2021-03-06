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
import { uploadFile, removeFile, submitForm, changeImage } from './actions';
import SizeImage from 'assets/images/size.png';
import ThankView from 'components/ThankView';
import { isEmpty } from 'lodash';
import validate from './validate';
import {actionCreators} from 'redux-form';

const beds = ['', 1, 2, 3, 4, 5, 6, 7];
const leaseDuration = ['lease', 'Month to Month', '6 months', '1 year'];
const months = ['Months', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31];
let searchBox;
var objectData = {
  'postal-code':'',
  'street-address':'',
  'country-name':'',
  'locality':'',
  'region':'',
}

export class ListRooms extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    var input = document.getElementById('search')
    searchBox = new google.maps.places.Autocomplete(input, {
                                                        types: ['address'],
                                                        componentRestrictions: {country: "us"}
                                                    })
    searchBox.addListener('place_changed', ()=>{
        var data = searchBox.getPlace()
        objectData.lng = data.geometry.location.lng();
        objectData.lat = data.geometry.location.lat();
        var adr_address = data.adr_address.split('</span>')

        var objectAry = Object.keys(objectData)

        for (var i = 0; i != adr_address.length; i++){

          for (var a = 0; a!= objectAry.length; a ++){
            if (adr_address[i].match(objectAry[a])){
              objectData[objectAry[a]] = adr_address[i].split('>').pop()
            }
          }
        }
        console.log(objectData);
    });

    $('#search').on("keyup", function(e) { 
      var currentAddress = $('#search').val();
      if(!e.keyCode != 13) {
        console.log(objectData);
        objectData = {
          'postal-code':'',
          'street-address':'',
          'country-name':'',
          'locality':'',
          'region':'',
        };
        console.log(objectData);
      }
    });
  }
  render() {
    const { handleSubmit, formValues, handleFileRemove, loading, submitted, changeImage} = this.props;
    let imagesBlock = '';
    let realImages = []

    //clean the array of images

    if (formValues.images && formValues.images.length) {
      imagesBlock = (
        <div className={styles.drag}>
          <div className="row">
            {formValues.images.map((image,i)=>{
              if (image.preview) {
                realImages.push(image)
              }
            })}

            {realImages.map((image, i) => {
              let leftOptions = (
                <button type="button" onClick={()=>{changeImage(formValues.images, i, 'left')}} className={`btn ${styles.thumbLeft}`} data-idx={i}>
                  <i className="fa fa-arrow-circle-o-left"></i>
                </button>
              )
              let rightOptions = (
                <button type="button" onClick={()=>{changeImage(formValues.images, i, 'right')}} className={`btn ${styles.thumbRight}`} data-idx={i}>
                  <i className="fa fa-arrow-circle-o-right"></i>
                </button>
              );

              if (realImages.length == 1 && i == 0){
                leftOptions = ''
                rightOptions = ''
              } else if (realImages.length-1 == i){
                rightOptions = ''
              } else if (realImages.length > 1 && i == 0){
                leftOptions = ''
              }

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
                    {leftOptions}
                    {rightOptions}
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
            title="List a Room"
            meta={[
              { name: 'description', content: 'Description of ListRooms' },
            ]}
          />
          <div className="row">
            {submitted ? <ThankView /> : <div className="col-md-8 col-md-offset-2">
              <form onSubmit={handleSubmit}>
                <div>
                  <p className="text-center">Everything must be filled out accurately to submit your listing!</p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-sm-8">
                      <p>*Must upload 5 photos minimum, but more is better!</p>
                      <Dropzone
                        onDrop={this.props.handleDrop}
                        accept="image/*"
                        multiple = {true}
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
                      {/*
                        {this.state.files.length > 0 ? <div style={{border: '1px solid black', marginTop:'5px', padding: 5, borderRadius: 5}}>
                        <h2>You are missing {count} photos</h2>
                        <div>{this.state.files.map((file) => <img src={file.preview} className={styles.imgPreview} /> )}</div>
                        </div> : null}
                      */}
                      <div className={styles.content}>
                        <h4 className={styles.normalTitle}>Description</h4>
                        <Field
                          type="text"
                          validate={(value) => { 
                            if(!value) return "required"  
                          }}
                          required
                          name="description"
                          className="form-control"
                          component="textarea"
                          rows="8"
                          cols="40"
                          placeholder="Tell everyone what they can look forward to at this property!"
                        />
                      </div>

                    </div>
                    <div className="col-sm-4">
                      <div className={styles.content}>
                        <Field
                          type="text"
                          validate={(value) => { 
                            if(!value) return "required"  
                          }}
                          required
                          name="title"
                          className="form-control input-sm"
                          placeholder="Make a nice title"
                          component={Input}
                          style={{ width: '100%' }}
                        />
                        <Field
                          component='input'
                          type="text"
                          id='search'
                          placeholder='Address'
                          className={`${styles.searchBox} form-control input-sm`}
                          name="address"
                        />
                        <p className="hint">*YOUR ADDRESS WILL NOT BE SHOWN, THIS IS ONLY FOR THE MAP</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <Field
                              type="number"
                              validate={(value) => { 
                                if(!value) return "required"  
                              }}
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
                                <Field 
                                  name="rentType" 
                                  component="input" 
                                  type="radio" 
                                  value="yes" 
                                  validate={(value) => { 
                                    if(!value) return "required"  
                                  }}
                                  required 
                                /> Yes
                              </label>
                            </div>
                            <div className={`checkbox ${styles.checkbox}`}>
                              <label htmlFor="rentType">
                                <Field 
                                  name="rentType" 
                                  component="input" 
                                  type="radio" 
                                  value="no"
                                  validate={(value) => { 
                                    if(!value) return "required"  
                                  }} 
                                  required /> No
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <Field
                              type="number"
                              validate={(value) => { 
                                if(!value) return "required"  
                              }}
                              required
                              name="amount"
                              className="form-control input-sm"
                              placeholder="Deposit"
                              component={Input}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.content}>
                        <h4 className={styles.normalTitle}>Contact</h4>
                        <div>
                          <div className={styles.title} style={{ float: 'left', width: '20%' }}>Name</div>
                          <Field
                            type="text"
                            validate={(value) => { 
                              if(!value) return "required"  
                            }}
                            required
                            name="contactName"
                            className="form-control input-sm"
                            component={Input}
                          />
                        </div>
                        <div>
                          <div className={styles.title} style={{ float: 'left', width: '20%' }}>Email</div>
                          <Field
                            type="text"
                            name="contactEmail"
                            className="form-control input-sm"
                            component={Input}
                          />
                        </div>
                        <div>
                          <div className={styles.title} style={{ float: 'left', width: '20%' }}>Phone</div>
                          <Field
                            type="text"
                            validate={(value) => { 
                              if(!value) return "required"  
                            }}
                            required
                            name="phone"
                            style={{float:'center'}}
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
                          validate={(value) => { 
                            if(!value || value == "Months") return "required"  
                          }}
                          required
                        />
                        <Field
                          name="day"
                          className={`form-control input-sm ${styles.select}`}
                          component={Select}
                          items={days}
                          firstEmpty
                          validate={(value) => { 
                            if(!value || value == "Day") return "required"  
                          }}
                          required
                        />
                      </div>
                      <div className={styles.content}>
                        <div className="row">
                          <div className={`col-sm-6 ${styles.borderRight}`}>
                            <h4 className={styles.normalTitle}>Utilities <small>incl</small></h4>
                            <div className={`radio ${styles.checkbox}`}>
                              <label htmlFor="rentType">
                                <Field 
                                  name="utilitiesIncluded" 
                                  component="input" 
                                  type="radio" 
                                  value="yes"
                                  validate={(value) => { 
                                    if(!value) return "required"  
                                  }} 
                                  required /> Yes
                              </label>
                            </div>
                            <div className={`checkbox ${styles.checkbox}`}>
                              <label htmlFor="rentType">
                                <Field 
                                  name="utilitiesIncluded" 
                                  component="input" 
                                  type="radio" 
                                  value="no" 
                                  validate={(value) => { 
                                    if(!value) return "required"  
                                  }}
                                  required /> No
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
                              validate={(value) => { 
                                if(!value) return "required"  
                              }}
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
        changeImage: React.PropTypes.func,
        handleFileRemove: React.PropTypes.func,
        formValues: React.PropTypes.object,
        loading: React.PropTypes.bool,
        submitted: React.PropTypes.bool,
      };

      const mapStateToProps = selectListRooms();

      function mapDispatchToProps(dispatch) {
        return {
          onSubmit: (values) => {
            const errors = validate(values, objectData);
            if (!isEmpty(errors)) {
              if (errors.images) {
                alert(errors.images); // eslint-disable-line
              }
              if (errors.address) {
                alert(errors.address); // eslint-disable-line
              }
              dispatch(stopSubmit('ListRoomsForm', errors));
              throw new SubmissionError(errors);
            } else {
              var send = values.toJS()

              send['address'] = objectData['postal-code']
              send['city'] = objectData['locality']
              send['street'] = objectData['street-address']
              send['state'] = objectData['region']
              send['lat'] = objectData['lat']
              send['lng'] = objectData['lng']

              dispatch(submitForm(send));
            }
          },
          changeImage:(files, idx, direction) => {
            dispatch(changeImage(files, idx, direction));
          },
          handleFileRemove: (e) => {
            dispatch(removeFile(e.currentTarget.dataset.idx));
          },
          handleDrop: (files) => {
            if (files.length) {
              files.map((image, i)=>{
                console.log(image);
                dispatch(uploadFile(image));
              })


            }
          },
          dispatch,
        };
      }
      const listRooms = reduxForm({
        form: 'ListRoomsForm',
      })(ListRooms);

      export default connect(mapStateToProps, mapDispatchToProps)(listRooms);

/*
 *
 * DetailView
 *
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectDetailView from './selectors';
import styles from './styles.css';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import './social.css';
// import { Link } from 'react-router';

//import Image Gallery
import ImageGallery from 'react-image-gallery'

//Import modal Component
import Modal from 'react-modal'
import { Popover, OverlayTrigger } from 'react-bootstrap';


import { goBack } from 'react-router-redux';
import { resetSubmittedProp, submitFlagListing as submit } from './actions';
import { loadEntry } from './actions';
import Map from 'components/Map';
import { Link } from 'react-router';
import GalleryModal from 'components/GalleryModal'

export class DetailView extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false,
      flagModalIsOpen: false,
      currentIndex: "",
      images: [],
      imagesModal: [],
      modalHeight: '800px',
      modalWidth: '500px',
      sizes:[]
    }
    this.expandImage = this.expandImage.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.openFlagModal = this.openFlagModal.bind(this)
    this.onSlide = this.onSlide.bind(this)
    this.onImageLoad = this.onImageLoad.bind(this)
    this.modalSize = this.modalSize.bind(this)
  }
  componentDidMount() {
    this.props.fetchEntry(this.props.routeParams.slug);
  }
  expandImage(e){
    if (screen.width > 768) {
      this.setState({modalIsOpen: true})
      // this.modalSize(e.target.width, e.target.height)
      this.modalSize('650', '450')
    }
  }
  closeModal(){
    this.setState({modalIsOpen:false})
  }
  openFlagModal(){
    this.props.resetSubmittedProp()
  }
  componentWillReceiveProps(nextProps){
    var images = new Array()
    if(nextProps.entry.images){
      for (var i = 0; i < nextProps.entry.images.length; i++) {
        var url_images = `https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${nextProps.entry.images[i].name}`
        var src = {original: url_images,thumbnail: url_images}
        images.push(src)
      }  
    }
    if (images.length > 0) {
      this.setState({images:images})
      this.setState({imagesModal: images})
    }
  }
  onSlide(index){
    this.setState({currentIndex: index})
  }
  modalSize(width, height){
    this.setState({modalHeight: height})
    this.setState({modalWidth: width})
  }
  onImageLoad(e){
    var width = e.target.width;
    var height = e.target.height;
    this.state.sizes.push({id:e.target.src, width:e.target.width, height:e.target.height})
    let factor
    if (screen.width > 768) {
      if (height > width) {
        factor = height/400
        e.target.height = height/factor
        e.target.width = width/factor
      }else {
        factor = width/440
        e.target.height = height/factor
        e.target.width = width/factor
      }
    }
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapLoad(map) {
    if (map) {
      this.map = map
      var callback = function(obj){
        obj.map.panTo({lat:obj.props.entry.lat,lng:obj.props.entry.lng})
      };
      window.setTimeout(callback, 1000, this);
    }
  }



  render() {
    //CustomStyles for modal
    let modalWidth = this.state.modalWidth
    let modalHeight = this.state.modalHeight
    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)',
        zIndex            : 100
      },
      content : {
        transition                 : '1s',
        position                   : 'absolute',
        top                        : window.innerHeight/2 - modalHeight/2,
        left                       : window.innerWidth/2 - modalWidth/2,
        right                      : '40px',
        bottom                     : '40px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'hidden',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        width                      :  modalWidth,
        height                     :  modalHeight*1.1
      }
    }
    // console.log(this.props)
    const { entry } = this.props;
    const markers = [];
    if (entry.lat && entry.lng) {
      markers.push({
        position: {
          lat: entry.lat,
          lng: entry.lng,
        },
        key: entry.entryId,
        defaultAnimation: 2,
      });
    }
    let entryTitle = '';
    if (entry.type !== 'rooms') {
      entryTitle = `${entry.address}, ${entry.city}, ${entry.state} ${entry.zipcode}`;
    } else {
      entryTitle = entry.title;
    }
    const { submitFlagListing, flagListingSubmitted } = this.props;

    const popoverTop = (
      <Popover id="popover-positioned-top">
        <div id='flagModal' style={{height: '250px', width: '200px'}}>
        {!flagListingSubmitted ? <form method='POST'>
          <textarea
            id="flagListingMessage"
            name={this.props.routeParams.slug}
            rows="8"
            cols="40"
            className={`form-control ${styles.textarea}`}
            ref='message'
            placeholder="What's the problem with this listing?"
            required
          ></textarea>
          <button className={`btn btn-xs ${styles.button}`}
            onClick={submitFlagListing}
          >
            Submit
          </button>
        </form> : <p>Thank you! We will verify this listing shortly.</p>}
        </div>
      </Popover>
    );

    return (
      <div className={styles.detailView}>
        <Helmet
          title="DetailView"
          meta={[
            { name: 'description', content: 'Description of DetailView' },
          ]}
        />
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <button className="btn" onClick={this.props.handleBack}>
              <b>Back</b>
            </button>
            <br />
            <br />
            <div className={`row ${styles.detail}`}>
              <div className="col-sm-7">
                <ImageGallery
                  items={this.state.images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  onClick={this.expandImage}
                  onImageLoad={this.onImageLoad}
                  onSlide={this.onSlide}
                />
                <h3>Description</h3>
                <p className={styles.descriptionText}>
                  {entry.description}
                </p>
                {entry.type !== 'rooms' ? <div>
                  <div className={styles.line}></div>
                  <div className={styles.strong}>
                    Pets <span>{entry.pets ? 'YES' : 'NO'}</span>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.strong}>
                    Parking <span>{entry.parking ? 'YES' : 'NO'}</span>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.strong}>
                    Amenities
                  </div>
                  <div className="row">
                    {entry.balcony ? <div className="col-sm-6">Balcony</div> : ''}
                    {entry.fireplace ? <div className="col-sm-6">Fireplace</div> : ''}
                    {entry.storage ? <div className="col-sm-6">Storage</div> : ''}
                    {entry.furnished ? <div className="col-sm-6">Furnished</div> : ''}
                    {entry.sublet ? <div className="col-sm-6">Sublet</div> : ''}
                    {entry.washerInUnit ? <div className="col-sm-6">Washer/dryer in unit</div> : ''}
                    {entry.guarontorsAccepted ? <div className="col-sm-6">Guarontors Accepted</div> : ''}
                    {entry.washerDryerInBuilding ? <div className="col-sm-6">Washer/Dryer in Building</div> : ''}
                    {entry.loft ? <div className="col-sm-6">Loft</div> : ''}
                    {entry.diswasher ? <div className="col-sm-6">Diswasher</div> : ''}
                    {entry.elevator ? <div className="col-sm-6">Elevator</div> : ''}
                    {entry.gym ? <div className="col-sm-6">Gym</div> : ''}
                    {entry.pool ? <div className="col-sm-6">Pool</div> : ''}
                    {entry.roof ? <div className="col-sm-6">Roof</div> : ''}
                    {entry.yard ? <div className="col-sm-6">Yard</div> : ''}
                    {entry.doorman ? <div className="col-sm-6">Doorman</div> : ''}
                  </div>
                </div> : ''}
              </div>

              <div className="col-sm-5">
                {entryTitle}
                <div className={styles.price}>${entry.price}</div>
                {entry.amount ? <div><b>+${entry.amount} security deposit</b></div> : ''}
                {entry.squareFeet ? <div>{entry.squareFeet} square feet</div> : ''}
                <Map
                  containerElement={
                    <div style={{ height: 300 }} />
                  }
                  mapElement={
                    <div style={{ height: 300 }} />
                  }
                  markers={markers}
                  onMapLoad={this.handleMapLoad}
                />
                <h4>Contact</h4>
                <div>
                  {entry.contactName}
                </div>
                <span>email: {entry.contactEmail}</span> <br/>
                <span>Phone: {entry.phone}</span>
                <div className={styles.option}>
                  <a href="#print" onClick={() => window.print()}>Print</a>
                  <a className="resp-sharing-button__link" href={`https://facebook.com/sharer/sharer.php?u=https://www.rentgene.com${this.props.location.pathname}`} target="_blank" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                      <svg version="1.1" x="0px" y="0px" width="12px" height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                        <g>
                          <path d="M18.768,7.465H14.5V5.56c0-0.896,0.594-1.105,1.012-1.105s2.988,0,2.988,0V0.513L14.171,0.5C10.244,0.5,9.5,3.438,9.5,5.32 v2.145h-3v4h3c0,5.212,0,12,0,12h5c0,0,0-6.85,0-12h3.851L18.768,7.465z"/>
                        </g>
                      </svg>
                    </div>
                    </div>
                  </a>

                  <a className="resp-sharing-button__link" href={`https://twitter.com/intent/tweet/?text=${entryTitle}&amp;url=https://www.rentgene.com${this.props.location.pathname}`} target="_blank" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
                      <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                        <svg version="1.1" x="0px" y="0px" width="16px" height="20px" viewBox="0 0 24 20" enableBackground="new 0 0 24 20">
                          <g>
                            <path d="M23.444,4.834c-0.814,0.363-1.5,0.375-2.228,0.016c0.938-0.562,0.981-0.957,1.32-2.019c-0.878,0.521-1.851,0.9-2.886,1.104 C18.823,3.053,17.642,2.5,16.335,2.5c-2.51,0-4.544,2.036-4.544,4.544c0,0.356,0.04,0.703,0.117,1.036 C8.132,7.891,4.783,6.082,2.542,3.332C2.151,4.003,1.927,4.784,1.927,5.617c0,1.577,0.803,2.967,2.021,3.782 C3.203,9.375,2.503,9.171,1.891,8.831C1.89,8.85,1.89,8.868,1.89,8.888c0,2.202,1.566,4.038,3.646,4.456 c-0.666,0.181-1.368,0.209-2.053,0.079c0.579,1.804,2.257,3.118,4.245,3.155C5.783,18.102,3.372,18.737,1,18.459 C3.012,19.748,5.399,20.5,7.966,20.5c8.358,0,12.928-6.924,12.928-12.929c0-0.198-0.003-0.393-0.012-0.588 C21.769,6.343,22.835,5.746,23.444,4.834z"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a className="resp-sharing-button__link" href={`mailto:?subject=${entryTitle}&body=http://www.rentgene.com${this.props.location.pathname}`} target="_self" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                      <svg version="1.1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 24 20" enableBackground="new 0 0 24 20">
                        <path d="M22,4H2C0.897,4,0,4.897,0,6v12c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2V6C24,4.897,23.103,4,22,4z M7.248,14.434 l-3.5,2C3.67,16.479,3.584,16.5,3.5,16.5c-0.174,0-0.342-0.09-0.435-0.252c-0.137-0.239-0.054-0.545,0.186-0.682l3.5-2 c0.24-0.137,0.545-0.054,0.682,0.186C7.571,13.992,7.488,14.297,7.248,14.434z M12,14.5c-0.094,0-0.189-0.026-0.271-0.08l-8.5-5.5 C2.997,8.77,2.93,8.46,3.081,8.229c0.15-0.23,0.459-0.298,0.691-0.147L12,13.405l8.229-5.324c0.232-0.15,0.542-0.084,0.691,0.147 c0.15,0.232,0.083,0.542-0.148,0.691l-8.5,5.5C12.189,14.474,12.095,14.5,12,14.5z M20.934,16.248 C20.842,16.41,20.673,16.5,20.5,16.5c-0.084,0-0.169-0.021-0.248-0.065l-3.5-2c-0.24-0.137-0.323-0.442-0.186-0.682 s0.443-0.322,0.682-0.186l3.5,2C20.988,15.703,21.071,16.009,20.934,16.248z"/>
                      </svg>
                    </div>
                    </div>
                  </a>
                  <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverTop}>
                    <a className="resp-sharing-button__link" onClick={this.openFlagModal} aria-label="">
                      <div className="resp-sharing-button resp-sharing-button--email resp-sharing-button--small">
                        <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                          <svg version="1.1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 24 20" enableBackground="new 0 0 24 20">
                            <polygon style={{"fill":"#CC4B4C"}} points="25,8.5 10,15 10,22 10,1"/>
                            <path style={{"fill":"#CC4B4C"}} d="M9,0C8.448,0,8,0.447,8,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C10,0.447,9.552,0,9,0z"/>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </OverlayTrigger>

                  {/* <Link style={{color: 'red', fontWeight:'bold'}} to={'/feedback'}>Problem?</Link> */}
                </div>
                <div className={styles.date}>
                  Available - {entry.months} {entry.day}
                </div>

                <h5>Utilities <small>incl</small></h5>
                <div className={styles.lineLeft}></div>

                {entry.electric ? <div>Electric</div> : ''}
                {entry.gas ? <div>Gas</div> : ''}
                {entry.water ? <div>Water</div> : ''}
                {entry.trash ? <div>Trash</div> : ''}

                {entry.type === 'rooms' ?
                  <div>
                    {entry.utilitiesIncluded === 'yes' ? <div>Yes</div> : 'No'}
                  </div>
                : ''}

                <h5>Duration</h5>
                <div className={styles.lineLeft}></div>
                <div>{entry.leaseDuration}</div>
              </div>
            </div>
          </div>
        </div>
          <Modal contentLabel="Listing Image" isOpen={this.state.modalIsOpen} style={customStyles}>
          <button onClick={this.closeModal}>close</button><br/>
          <div id='modal'>
          <GalleryModal
            images={this.state.imagesModal}
            startIndex={this.state.currentIndex == "" ? 0:this.state.currentIndex}
            modalSize={this.modalSize}
            sizes={this.state.sizes}
          />
          </div>
          {/* <img className={styles.modalImg} src={this.state.currentImage} alt="" /> */}
          </Modal>
      </div>
    );
  }
}

DetailView.propTypes = {
  handleBack: React.PropTypes.func,
  submitFlagListing: React.PropTypes.func.isRequired,
  flagListingSubmitted: React.PropTypes.bool,
  resetSubmittedProp: React.PropTypes.func,
};


const mapStateToProps = selectDetailView();

function mapDispatchToProps(dispatch) {
  return {
    handleBack: () => {
      dispatch(goBack());
    },
    fetchEntry: (entryId) => {
      dispatch(loadEntry(entryId));
    },
    submitFlagListing: (e) => {
      e.preventDefault();
      const el = document.getElementById('flagListingMessage');
      const flagMessage = el.value;
      const listingId = el.name;
      dispatch(submit(flagMessage, listingId));
    },
    resetSubmittedProp: () => {
      dispatch(resetSubmittedProp())
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);

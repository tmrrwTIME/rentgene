/**
*
* List
*
*/

import React from 'react';
import { Link } from 'react-router';
// import SizeImage from 'assets/images/size.png';
import Map from 'components/Map';
import Stickyfill from 'stickyfill';
import jump from 'jump.js';
import styles from './styles.css';
import Gallery from 'components/Gallery'

import LazyLoad from 'react-lazy-load';



class List extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {
      hovered: '',
      images: [],
      markers: []
    };
  }
  componentDidMount() {
    const stickyfill = Stickyfill(); // eslint-disable-line
    stickyfill.add(document.getElementById('stickyContainer'));
    window.stickyfill = stickyfill;
    const markers = [];
    this.props.entries.forEach(entry => {
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
    });
    this.setState({markers: markers})
  }

  onMouseOver(e, markers) {
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].key === e.currentTarget.dataset.id) {
        markers[i].animation = google.maps.Animation.BOUNCE
        this.setState({markers: markers})
      }
    }
    if (screen.width > 414) {
      this.setState({ hovered: e.currentTarget.dataset.id });
    }
  }

  onMouseOut(e, markers) {
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].key === e.currentTarget.dataset.id) {
        markers[i].animation = null
        this.setState({markers: markers})
      }
    }
    if (screen.width > 414) {
      this.setState({ hovered: '' });
    }
  }

  handleMarkerClick(marker) {
    const el = document.getElementById(`entry-${marker.key}`);
    const elements = document.getElementsByClassName(styles.item);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = '';
    }
    el.style.backgroundColor = 'rgba(3, 169, 244, 0.18)';
    jump(`#entry-${marker.key}`);
  }
  render() {
    var animation
    const { entries } = this.props;
    var marks = this.state.markers
    var column
    if (screen.width >= 480 && screen.width <= 640) {
      column = 'col-xs-offset-1 col-xs-10'
    }else {
      column = 'col-xs-12'
    }
    return (
      <div>
        <div className={`row ${styles.mainContainer}`}>
          <div className={`col-xs-12 col-sm-12 col-md-6 ${styles.item}`}>
            <div className={`col-xs-12 col-sm-12`} ref="list">
              {entries ? entries.map((entry, i) => {
                const key = `entry-${i}`;
                // let image;
                // if (entry.images && entry.images.length) {
                //   image = entry.images[0].name;
                // }
                const price = parseInt(entry.price, 10).toLocaleString();
                let address = '';
                let leftTitle = `${entry.beds} beds, ${entry.baths} baths`;
                if (entry.address) {
                  address = `${entry.address}, ${entry.city}, ${entry.state} ${entry.zipcode}`;
                }

                if (entry.type === 'rooms') {
                  address = entry.title;
                  leftTitle = entry.city;
                }

                const hoverStyle = {};
                if (this.state.hovered === entry.entryId) {
                  hoverStyle.backgroundColor = 'rgba(76, 175, 80, 0.25)';
                } else {
                  hoverStyle.backgroundColor = '';
                }
                return (
                  <LazyLoad>
                  <div
                    id={`entry-${entry.entryId}`}
                    key={key}
                    className={`col-sm-6 ${column}`}
                    onMouseOver={(e)=>this.onMouseOver(e, marks)}
                    onMouseOut={(e)=>this.onMouseOut(e, marks)}
                    data-id={entry.entryId}
                    style={hoverStyle}
                  >
                    <div className={styles.ads}>
                      {/*<div className={styles.thumb}>
                         <Link className={styles.thumbMain} to={`/v/${entry.entryId}`}>
                          <img className={styles.image} src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${image}`} alt="" />
                          </Link>
                        <img src={SizeImage} className={styles.size} alt="" /> */}
                        <Gallery
                          id={`gallery${i}`}
                          images={entry.images}
                          to={`/v/${entry.entryId}`}
                        />
                      {/*</div>*/}
                      <Link className={styles.title} to={`/v/${entry.entryId}`}>
                        <span>{address}</span>
                      </Link>
                      <div className="desc clearfix">
                        <div className="pull-left">
                          {leftTitle}
                        </div>
                        <div className="pull-right">
                          {entry.squareFeet ? `${entry.squareFeet} sq ft -` : ''} ${price}
                        </div>
                      </div>
                    </div>
                  </div>
                  </LazyLoad>
                );
              }) : ''}
            </div>
          </div>
          <div className={`col-xs-12 col-sm-12 col-md-6 ${styles.mapContainer}`}>
            <div id="stickyContainer" className={styles.sticky}>
              <Map
                containerElement={
                  <div style={{ height: 500 }}></div>
                }
                mapElement={
                  <div style={{ height: 500 }}></div>
                }
                markers={marks}
                handleMarkerClick={this.handleMarkerClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
List.propTypes = {
  entries: React.PropTypes.array.isRequired,
};

export default List;

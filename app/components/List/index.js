/**
*
* List
*
*/

import React from 'react';
import { Link } from 'react-router';
import SizeImage from 'assets/images/size.png';
import Map from 'components/Map';
import Stickyfill from 'stickyfill';
import jump from 'jump.js';
import styles from './styles.css';

class List extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {
      hovered: '',
    };
  }

  componentDidMount() {
    const stickyfill = Stickyfill(); // eslint-disable-line
    stickyfill.add(document.getElementById('stickyContainer'));
    window.stickyfill = stickyfill;
    this.refs.map.style.height = `1000px`; // eslint-disable-line
  }

  onMouseOver(e) {
    this.setState({ hovered: e.currentTarget.dataset.id });
  }

  onMouseOut() {
    this.setState({ hovered: '' });
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
    const { entries } = this.props;
    const markers = [];
    entries.forEach(entry => {
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
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className={styles.list} ref="list">
              {entries ? entries.map((entry, i) => {
                const key = `entry-${i}`;
                let image;
                if (entry.images && entry.images.length) {
                  image = entry.images[0].name;
                }
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
                  <div
                    id={`entry-${entry.entryId}`}
                    key={key}
                    className={`list-item col-sm-6 ${styles.item}`}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    data-id={entry.entryId}
                    style={hoverStyle}
                  >
                    <div className={styles.ads}>
                      <div className={styles.thumb}>
                        <Link className={styles.thumbMain} to={`/v/${entry.entryId}`}>
                          <img className={styles.image} src={`https://s3-us-west-2.amazonaws.com/rentgene-uploads/images/${image}`} alt="" />
                        </Link>
                        <img src={SizeImage} className={styles.size} alt="" />
                      </div>
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
                );
              }) : ''}
            </div>
          </div>
          <div className="col-sm-6" ref="map">
            <div id="stickyContainer" className={styles.sticky}>
              <Map
                containerElement={
                  <div style={{ height: 500 }}></div>
                }
                mapElement={
                  <div style={{ height: 500 }}></div>
                }
                markers={markers}
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

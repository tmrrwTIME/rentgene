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

import styles from './styles.css';

class List extends React.Component { // eslint-disable-line
  componentDidMount() {
    const stickyfill = Stickyfill(); // eslint-disable-line
    stickyfill.add(document.getElementById('stickyContainer'));
    window.stickyfill = stickyfill;
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
            <div className={styles.list}>
              {entries ? entries.map((entry, i) => {
                const key = `entry-${i}`;
                let image;
                if (entry.images && entry.images.length) {
                  image = entry.images[0].name;
                }
                const price = parseInt(entry.price, 10).toLocaleString();
                let address = '';
                if (entry.address) {
                  address = entry.address;
                } else {
                  address = `${entry.address1} ${entry.address2}`;
                }

                if (entry.type === 'rooms') {
                  address = entry.title;
                }

                return (
                  <div key={key} className={`list-item col-sm-6 ${styles.item}`}>
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
                          {entry.beds} beds, {entry.baths} baths
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
          <div className="col-sm-6">
            <div id="stickyContainer" className={styles.sticky}>
              <Map
                containerElement={
                  <div style={{ height: 500 }}></div>
                }
                mapElement={
                  <div style={{ height: 500 }}></div>
                }
                markers={markers}
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

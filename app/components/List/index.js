/**
*
* List
*
*/

import React from 'react';
import { Link } from 'react-router';
import SizeImage from 'assets/images/size.png';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import styles from './styles.css';

const GettingStartedGoogleMap = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 34.0105057, lng: -118.3540964 }}
    onClick={() => {}}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => {}}
      />
    ))}
  </GoogleMap>
));

function List(props) {
  const { entries } = props;
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
  console.log('markers', markers);
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.list}>
            {entries ? entries.map((entry, i) => {
              const key = `entry-${i}`;
              let image;
              if (entry.images.length) {
                image = entry.images[0].name;
              }
              const price = parseInt(entry.amount, 10).toLocaleString();
              let address = '';
              if (entry.address) {
                address = entry.address;
              } else {
                address = `${entry.address1} ${entry.address2}`;
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
                    <Link className={styles.title} to={'/v/apartment-12312312'}>
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
          <GettingStartedGoogleMap
            containerElement={
              <div style={{ height: 400 }} />
            }
            mapElement={
              <div style={{ height: 400 }} />
            }
            // onMapLoad={_.noop}
            // onMapClick={_.noop}
            markers={markers}
            // onMarkerRightClick={_.noop}
          />
        </div>
      </div>
    </div>
  );
}

List.propTypes = {
  entries: React.PropTypes.array.isRequired,
};

export default List;

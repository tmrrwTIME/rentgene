/**
*
* Map
*
*/

import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import markerIcon from '../../assets/images/map_marker_20x40.png';

var style = {
  fontSize:10
}

const Map = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 34.0105057, lng: -118.3540964 }}
    onClick={() => {}}
    defaultOptions={{
      scrollwheel: false,
    }}
  >
    {props.markers ? props.markers.map((marker, index) => (
      <Marker
        key={`marker-${index}`}
        icon={markerIcon}
        {...marker}
        onClick={() => props.handleMarkerClick(marker)}
        // animation={props.animation}
      />
    )) : ''}
  </GoogleMap>
));

export default Map;

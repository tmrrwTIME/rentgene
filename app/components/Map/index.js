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

const Map = withGoogleMap((props) => (
  <GoogleMap
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
        {...marker}
        onRightClick={() => {}}
      />
    )) : ''}
  </GoogleMap>
));

export default Map;

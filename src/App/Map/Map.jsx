/**
 * Created by matias on 11/26/16.
 */
import React from 'react';
import GoogleMap from 'google-map-react';

const props = {
    center: {lat: -34.921512, lng: -57.954216},
    zoom: 15,
};

const style = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1
};

const Map = () => (
    <div style={style}>
        <GoogleMap
            defaultCenter={props.center}
            defaultZoom={props.zoom}>
        </GoogleMap>
    </div>
);

export default Map;
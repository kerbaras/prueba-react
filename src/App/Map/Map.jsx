/**
 * Created by matias on 11/26/16.
 */
import React from 'react';
import GoogleMap from 'google-map-react';

const apiKey = 'AIzaSyCU2AEu_YCQAgvOWHHDvshTnAZMKLqkxQw';

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
            apiKey={apiKey}
            defaultCenter={props.center}
            defaultZoom={props.zoom}
            onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
        >
        </GoogleMap>
    </div>
);

export default Map;
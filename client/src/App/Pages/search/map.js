import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '30em' };

export default class Map extends React.Component {
    render() {
        const { center, target } = this.props;
        return (
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_ID}>
                <GoogleMap className="google_maps_map" center={target} mapContainerStyle={containerStyle} clickableIcons={true} defaultZoom={7} zoom={7}>
                    <Marker position={center} />
                    <Marker position={target} icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"} />
                </GoogleMap>
            </LoadScript>
        )
    }
}
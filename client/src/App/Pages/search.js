import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';

const utils = require('../../utils');

const containerStyle = { width: '100%', height: '100%' };


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, lng: null }
    this.center = { lat: null, lng: null };
    this.search = [];

  }


  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = { lat: position.coords.latitude, lng: position.coords.longitude };

          this.center.lat = pos.lat;
          this.center.lng = pos.lng;

          this.setCenter(pos);
          this.getDocs(this.center);

        });
    }
  }
  async getDocs(point) { this.setDocs(await utils.request('/search', 'POST', point)) }

  setCenter(val) { this.center = val; this.forceUpdate() }
  setDocs(val) { this.search = val; this.forceUpdate() }

  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_ID}>
        <GoogleMap mapContainerStyle={containerStyle} defaultCenter={this.center} center={this.center} defaultZoom={14} zoom={14}>
          {this.search.length > 0 ? this.search.map((d, key) => {

            var position = { lat: parseFloat(d.lat.$numberDecimal), lng: parseFloat(d.lng.$numberDecimal) };
            var rating = d.rating.points / d.rating.number_review;

            return (
              <div key={key}>
                <Marker key={key + "1"} icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"} position={position} />
                <InfoBox key={key} position={position}>
                  <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 7 }}>
                    <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                      <p>Name: {d.name}</p>
                      <p>Email:{d.email}</p>
                      <p>Phone Number: {d.phone_number}</p>
                      <p>Specialization: {d.specialization}</p>
                      <p>Rating: {rating}</p>
                    </div>
                  </div>
                </InfoBox>
              </div>
            )
          }) : <div>Nimic</div>}

          <Marker icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"} position={this.center} />

          <InfoBox position={this.center}>
            <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 7 }}>
              <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                <p>You are here!</p>
              </div>
            </div>
          </InfoBox>
        </GoogleMap>
      </LoadScript>
    )
  }
}

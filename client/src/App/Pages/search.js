import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
import {
  HomeOutlined,
} from '@ant-design/icons';

const utils = require('../../utils');

const containerStyle = { width: '100%', height: '100%' };


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { center : {lat: null, lng: null}, search: [] }
    this.search = [];
  }

  async componentDidMount() {
    this.props.loading('on');
    await new Promise((resolve,reject)=>{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const pos = { lat: position.coords.latitude, lng: position.coords.longitude };

            var center = { lat : pos.lat, lng : pos.lng }
            var search = await this.getDocs(this.state.center);

            this.setState({center : center, search: search})
            resolve();
          });
      }
    })
    this.props.loading('off');
  }

  getDocs(point) { return new Promise(async (resolve,reject)=>{resolve(await utils.request('/search', 'POST', point))})}

  render() {

    const {center, search} = this.state;

    console.log(center);

    if(center.lat === null || center.lng === null) return null;
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_ID}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} clickableIcons={true} defaultZoom={14} zoom={14}>

        <Marker position={center} />

          <InfoBox position={center}>
            <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 7 }}>
              <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                <p>You are here!</p>
              </div>
            </div>
          </InfoBox> 
          
          {search.length > 0 ? search.map((d, key) => {

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
        </GoogleMap>
      </LoadScript>
    )
  }
}

import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const utils = require('../../utils');

const containerStyle = {
    width: '100%',
    height: '100%'
  };

 
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat: null,
            lng: null
        }
       this.center = {
            lat: null,
            lng: null
          };
       this.search = [];
    }
    
    componentDidMount(){
    if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                this.center.lat=pos.lat;
                this.center.lng=pos.lng;
                this.getDocs(this.center);

              });
            }
    }
    async getDocs(point){
       // this.search = await utils.request('/search', 'POST',point);
        this.setDocs(await utils.request('/search', 'POST',point));
       
    }
 
    
    setDocs(val) { this.search = val; this.forceUpdate() }
    
   
    render(){
        return <LoadScript googleMapsApiKey="AIzaSyCgPxDaSjZAVutlq-imNn24j3V1eYemR2w">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.center}
          zoom={14}>
          { /* Child components, such as markers, info windows, etc. */ }
          <>
          <Marker 
      icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={this.center} />
     

          {this.search.length > 0 ? this.search.map((d, key) =>{ 
              var position=
                {lat : parseFloat(d.lat.$numberDecimal),
                lng : parseFloat(d.long.$numberDecimal)
              } ;
              console.log(position);
              return (
        <Marker key={key}
      icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={position} 
        />
      ) }) : <div>Nimic</div>}

          </>
        </GoogleMap>
      </LoadScript>
        
    }
}

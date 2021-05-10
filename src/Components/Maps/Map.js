import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};
  
const containerStyle = {
    // position: 'relative',  
    width: '100%',
    height: '40%'
}

  export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 51.127360, lng: 17.036120},
                {latitude: 51.127360, longitude: 17.036120}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
      //  onClick={() => console.log("You clicked me!")} 
       />
      })
    }
  
    render() {
      return (
          <Map
            containerStyle={containerStyle}
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{ lat: 51.127360, lng: 17.036120}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCna8PkWTTQMB2_py14y2zY3lRVTn7GpH4'
  })(MapContainer);
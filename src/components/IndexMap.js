import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.730649,
      lng: -79.7614415
    },
    zoom: 19
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCXGT1r__ioAdN_jc26S4uvrcPz7NFaMAc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
import React, {Component} from 'react';
import Card from './Card';
import GoogleMapReact from 'google-map-react';

// Props for the markers
const marker = {
  style: {
    width: '50px',
    padding: '10px 0',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#678f9f',
    color: '#fff'
  },
  className: 'marker'
};

// Google maps api key
const apiKey = 'AIzaSyB2FA9WccmhFfzWhn0y1WIB-mWm_GFiy0A';

const AnyReactComponent = ({ text }) => <div {...marker}>{text}</div>;

class OffersMap extends Component {
  renderMarkers() {
     const markers = this.props.data.results
      .map((item, idx) =>
        <AnyReactComponent
          key={idx}
          lat={item.lat}
          lng={item.lng}
          text={item.price.toFixed(2)}
        />
      );

    return markers;
  }

  render() {
    const { maxLat, maxLng } = this.props.data.params.location;
    const mapConfig = {
      defaultCenter: {
        lat: maxLat,
        lng: maxLng
      },
      defaultZoom: 1,
      apiKey: apiKey
    };

    return (
      <div className="map">
        <GoogleMapReact {...mapConfig}>
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default OffersMap;


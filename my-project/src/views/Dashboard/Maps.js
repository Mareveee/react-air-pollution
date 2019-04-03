import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {
    CardBody,
    Col,
    Row,
  } from 'reactstrap';
  import React, { Component} from 'react';
class Maps extends Component{

    render() {
      var icon = {
        path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z", // url
        fillColor: this.props.AQI,
        fillOpacity: 1,
        strokeColor: this.props.AQI,
        strokeWeight: 1,
        scale: 1,
        scaledSize: new this.props.google.maps.Size(90, 42), // scaled size
    };
      const coords = { lat: 13.72, lng: 100.785 };
        return (
          <div className="animated fadeIn">
            <Row><CardBody>
            <Col xs="12" sm="6" lg="1"></Col>
            <Col xs="12" sm="6" lg="2">
            <Map initialCenter={coords}
                 google={this.props.google}
                 style={{width: 980, height: 500, position: 'relative'}}
                 zoom={14}>
              <Marker
                position={{lat: 13.7289668, lng: 100.77546009999999}}
                icon={icon}/>
            </Map>
            </Col></CardBody>
            </Row>
          </div>
        );
      }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC__lyq6VWQhcoffkhsFVf3US2Jfa138ng")
})(Maps)
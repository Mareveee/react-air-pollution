import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Progress,
  CardHeader,
  Table,
  Badge,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './Colors.css'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Custom.css';
import axios from 'axios'
import { PassThrough } from 'stream';
import Showpredict from './Showpredict'

class Locationpredict extends Component {
  static defaultProps = {
    center: {
      lat: 13.72,
      lng: 100.785
    },
    zoom: 11
  };
  constructor(props){
    super(props);
    this.state = {
      showPredict : true,
      location:'kmitl',
      locationName:[],
      locationID:[]
    }
  }

componentWillMount(){
  let i
  axios.get('http://54.169.105.27:1880/device')
  .then(response => {
    for(i=0;i<response.data.length;i++){
      this.setState({locationName:this.state.locationName.concat([response.data[i].deviceName])})
      this.setState({locationID:this.state.locationID.concat([response.data[i]._id])})
    }
    this.setState({location:this.state.locationName[0]})
  })

}

handleLocationChange = () => {
    let selectedValue = document.getElementById("location").value;
    this.setState({location:selectedValue})
  }

  render() {
    console.log(this.state.location)
    return (
      <div className="animated fadeIn">
      <Row>
      <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Location</Label>
                      <Input type="select" name="location" id="location" onChange={this.handleLocationChange}>
                        {this.state.locationName.map(datas => <option value={datas.id}>{datas}</option>)}
                      </Input>
                    </FormGroup>
                  </Col>
     </Row>
     <Showpredict data={this.props.data} location={this.state.location}/>
      </div>
    );
  }
}

export default Locationpredict;

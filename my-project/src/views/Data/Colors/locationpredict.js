import React, { Component } from 'react';
import {
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import './Colors.css'
import 'react-circular-progressbar/dist/styles.css';
import './Custom.css';
import axios from 'axios'
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
      location:'',
      locationName:[],
      locationID:[],
      predict24:[0,0,0,0,0]
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
  this.setState({showPredict:false})
  this.state.predict24[0] = 0
  this.state.predict24[1] = 0
  this.state.predict24[2] = 0
  this.state.predict24[3] = 0
  this.state.predict24[4] = 0
    let selectedValue = document.getElementById("location").value;
    this.setState({location:selectedValue})
  }

  render() {
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
     <Row><Col xs="2"> <Button active block color="dark" aria-pressed="true" onClick={()=>this.setState({showPredict:true})}>Show</Button></Col></Row>
     <Showpredict data={this.props.data} location={this.state.location} show={this.state.showPredict} predict={this.state.predict24}/>
      </div>
    );
  }
}

export default Locationpredict;


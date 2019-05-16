import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {
    CardBody,
    Col,
    Row,
    Card
  } from 'reactstrap';
  import {Line} from 'react-chartjs-2';
  import React, { Component} from 'react';
class Selectgraph extends Component{

    constructor(props){
        super(props)
        this.state ={
            linepm25:null,
            isCheckedPm25:false,
            isCheckedPm10:false,
            isCheckedO3:false,
            isCheckedCo:false,
            isCheckedNo2:false,
            isCheckedSo2:false,
            showdata:false
        }
        this.handleCheckedpm25 = this.handleCheckedpm25.bind(this);
        this.handleCheckedpm10 = this.handleCheckedpm10.bind(this);
        this.handleCheckedO3 = this.handleCheckedO3.bind(this);
        this.handleCheckedCO = this.handleCheckedCO.bind(this);
        this.handleCheckedNO2 = this.handleCheckedNO2.bind(this);
        this.handleCheckedSO2 = this.handleCheckedSO2.bind(this);
      }


      handleCheckedpm25 () {
        this.setState({isCheckedPm25: !this.state.isCheckedPm25});
      }
      handleCheckedpm10 () {
        this.setState({isCheckedPm10: !this.state.isCheckedPm10});
      }
      handleCheckedO3 () {
        this.setState({isCheckedO3: !this.state.isCheckedO3});
      }
      handleCheckedCO () {
        this.setState({isCheckedCo: !this.state.isCheckedCo});
      }
      handleCheckedNO2 () {
        this.setState({isCheckedNo2: !this.state.isCheckedNo2});
      }
      handleCheckedSO2 () {
        this.setState({isCheckedSo2: !this.state.isCheckedSo2});
      }


    render() {
        const linepm25 = {
            labels:this.props.timedata,  
            datasets: [{
              label:['PM2.5'],
              data: this.props.pm25,
              backgroundColor: "#FF8C00",
              borderColor: "#FF8C00",
            }]
          };
          const linepm10 = {
            labels:this.props.timedata,  
            datasets: [{
              label:['PM10'],
              data: this.props.pm10,
              backgroundColor: "#FF9966",
              borderColor: "#FF9966",
            }]
          };
          const lineo3 = {
            labels:this.props.timedata,  
            datasets: [{
              label:['O3'],
              data: this.props.o3,
              backgroundColor: "#FFCC66",
              borderColor: "#FFCC66",
            }]
          };
          const lineco = {
            labels:this.props.timedata,  
            datasets: [{
              label:['CO'],
              data: this.props.co,
              backgroundColor: "#FF6699",
              borderColor: "#FF6699",
            }]
          };
          const lineno2 = {
            labels:this.props.timedata, 
            datasets: [{
              label:['NO2'],
              data: this.props.no2,
              backgroundColor: "#FF99CC",
              borderColor: "#FF99CC",
            }]
          };
          const lineso2 = {
            labels:this.props.timedata, 
            datasets: [{
              label:['SO2'],
              data: this.props.so2,
              backgroundColor: "#FF6666",
              borderColor: "#FF6666",
            }]
          };
        console.log(this.props.pm25)
        let graphpm25 = null
        let graphpm10 = null
        let grapho3 = null
        let graphco = null
        let graphno2 = null
        let graphso2 = null
        if(this.state.isCheckedPm25){
            graphpm25 = <Col xs="12" sm="6" lg="6">
            <Card>
                <CardBody className="pb-0">
                <Line data={linepm25} width={680} height={250} />
                </CardBody> 
            </Card>
            </Col>
        }
        if(this.state.isCheckedPm10){
            graphpm10 = <Col xs="12" sm="6" lg="6">
            <Card>
                <CardBody className="pb-0">
                <Line data={linepm10} width={680} height={250} />
                </CardBody> 
            </Card>
            </Col>
        }
        if(this.state.isCheckedO3){
            grapho3 = <Col xs="12" sm="6" lg="6">
            <Card>
                <CardBody className="pb-0">
                <Line data={lineo3} width={680} height={250} />
                </CardBody> 
            </Card>
            </Col>
        }
        if(this.state.isCheckedCo){
            graphco = <Col xs="12" sm="6" lg="6">
            <Card>
                <CardBody className="pb-0">
                <Line data={lineco} width={680} height={250} />
                </CardBody> 
            </Card>
            </Col>
        }
        if(this.state.isCheckedNo2){
            graphno2 = <Col xs="12" sm="6" lg="6">
            <Card>
                <CardBody className="pb-0">
                <Line data={lineno2} width={680} height={250} />
                </CardBody> 
            </Card>
            </Col>
        }
        if(this.state.isCheckedSo2){
            graphso2 = <Col xs="12" sm="6" lg="6">
            <Card>
                <CardBody className="pb-0">
                <Line data={lineso2} width={680} height={250} />
                </CardBody> 
            </Card>
            </Col>
        }
        return (
          <div className="animated fadeIn">
            <Row><Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checkpm25" onChange={ this.handleCheckedpm25 }/>
                  <label for="checkpm25"></label></div>
                  <strong className="txtparam">PM2.5</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checkpm10" onChange={ this.handleCheckedpm10 }/>
                  <label for="checkpm10"></label></div>
                  <strong className="txtparam">PM10</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checko3" onChange={ this.handleCheckedO3 }/>
                  <label for="checko3"></label></div>
                  <strong className="txtparam">O3</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checkco" onChange={ this.handleCheckedCO }/>
                  <label for="checkco"></label></div>
                  <strong className="txtparam">CO</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checkno2" onChange={ this.handleCheckedNO2 }/>
                  <label for="checkno2"></label></div>
                  <strong className="txtparam">NO2</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checkso2" onChange={ this.handleCheckedSO2 }/>
                  <label for="checkso2"></label></div>
                  <strong className="txtparam">SO2</strong>
                  </Col>
                  </Row><br/>
                  <Row>
         {graphpm25}{graphpm10}{grapho3}{graphco}{graphno2}{graphso2}
            </Row>
          </div>
        );
      }
}

export default Selectgraph
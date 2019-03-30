import React, { Component, lazy, Suspense } from 'react';
import './Dashboards.css'
import {Doughnut,Line} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
class Dashboardsshow extends Component{
    render() {
    let datatemp = {
        labels:['Temperature'],
        datasets: [{
            data: [this.props.valuetemp, 100-this.props.valuetemp],
            backgroundColor: [
                '#00CED1',
                '#DCDCDC']
        }]
        };
    let datahu = {
        labels:['Humidity'],
        datasets: [{
            data: [this.props.valuehu, 100-this.props.valuehu],
            backgroundColor: [
                '#FF6666',
                '#DCDCDC']
        }]
        };
    let dataair = {
        labels:['Air Pressure'],
        datasets: [{
            data: [this.props.valuehu, 2000-this.props.valuehu],
            backgroundColor: [
                '#FFCC33',
                '#DCDCDC']
        }]
        };
        const linetemp = {
            labels:['1','2','3','4','5'],  
            datasets: [{
              label:['temperature'],
              data: [this.props.linetemp1,this.props.linetemp2,this.props.linetemp3,this.props.linetemp4,this.props.linetemp5],
              backgroundColor: [
                '#339999'
              ]
            }]
          };
          const linehu = {
            labels:['1','2','3','4','5'],  
            datasets: [{
              label:['humidity'],
              data: [this.props.linehu1,this.props.linehu2,this.props.linehu3,this.props.linehu4,this.props.linehu5],
              backgroundColor: [
                '#CC6666'
              ]
            }]
          };
          const lineair = {
            labels:['1','2','3','4','5'],  
            datasets: [{
              label:['air pressure'],
              data: [this.props.lineair1,this.props.lineair2,this.props.lineair3,this.props.lineair4,this.props.lineair5],
              backgroundColor: [
                '#ceae2d'
              ]
            }]
          };
        return (
          <div className="animated fadeIn">
            <Row >
                <Col xs="12" sm="6" lg="4">
                <Card className="bg-color3">
                    <CardBody className="pb-0">
                    <Col xs="12" sm="6" lg="4">
                    </Col>
                        <div className="text-value">{this.props.valuetemp} °C</div>
                        <div className="text-value">Temperature</div>
                        <Line data={linetemp}
                     height={170}/>
                    </CardBody> 
                </Card>
                </Col>
                <Col xs="12" sm="6" lg="4">
                <Card className="bg-color1">
                    <CardBody className="pb-0">
                        <div className="text-value">{this.props.valuehu} %</div>
                        <div className="text-value">Humidity</div>
                        <Line data={linehu}
                  height={170}/>
                    </CardBody> 
                </Card>
                </Col>
                <Col xs="12" sm="6" lg="4">
                <Card className="bg-color2">
                    <CardBody className="pb-0">
                        <div className="text-value">{this.props.valueair} hPa</div>
                        <div className="text-value">Air pressure</div>
                        <Line data={lineair}
                  height={170}/>
                    </CardBody> 
                </Card>
                </Col>
            </Row><hr/>
            <Row >
            <Col xs="12" sm="6" lg="4">
                    <Card className="bg">
                        <CardBody className="pb-0">
                        <Doughnut data={datatemp}
                                text={'50'}
                                 height={200}/>
                            <br/>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="6" lg="4">
                    <Card className="bg">
                        <CardBody className="pb-0">
                        <Doughnut data={datahu}
                                text={'50'}
                                 height={200}/>
                            <br/>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="6" lg="4">
                    <Card className="bg">
                        <CardBody className="pb-0">
                        <Doughnut data={dataair}
                                text={'50'}
                                 height={200}/>
                            <br/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row>
            <Col xs="12" sm="6" lg="10">
                </Col>
                <Col xs="12" sm="6" lg="2">
                <Card className="bg-color4">
                    <CardBody className="pb-0">
                    <div className="text-value">Battery {this.props.valuebatt} %</div>
                    
                    </CardBody> 
                </Card>
                </Col>
          </Row>
          </div>
        );
      }
}
export default Dashboardsshow;
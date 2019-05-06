import React from 'react';
import Paginations from './Paginations';
import {  Card, CardBody,  Col,  Row, Table,Button } from 'reactstrap';
 
class Tabledata extends React.Component {
    constructor() {
        super();
        this.state = {
          data:[],
          page:0,
          countpage:[],
          valHead:[],
          item:[],
          exampleItems: [],
          pageOfItems: [],
          startindex:0,
          endindex:0,
          entries:0,
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems,startIndex,endIndex,page) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
        this.setState({startindex:startIndex})
        this.setState({endindex:endIndex})
    }
    componentWillMount(){
        this.setState({exampleItems: [...Array(this.props.length).keys()].map(i => ({ id: (i+1)})),})
    }
 
    render() {
      let headTemp = null
      let headHu = null
      let headAir = null
      let headPm25 = null
      let headPm10 = null
      let headO3 = null
      let headCo = null
      let headNo2 = null
      let headSo2 = null
      let headaqi = null
      let showtemp = []
      let showhu = []
      let showair = []
      let showpm25 = []
      let showpm10 = []
      let showo3 = []
      let showco = []
      let showno2 = []
      let showso2 = []
      let showaqi = []
      let valuetemp = null
      let valuehu = null
      let valueair = null
      let valuepm25 = null
      let valuepm10 = null
      let valueo3 = null
      let valueco = null
      let valueno2 = null
      let valueso2 = null
      let valueaqi = null
      if(this.props.checktemp){
        showtemp = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.temperature[item.id-1]}</center></td></tr>)}
      </td>
        headTemp = <th>Temperature</th>
        valuetemp = <tr>
        <td><strong>Temperature</strong></td>
        <td>{this.props.tempMin}</td> 
        <td>{this.props.tempMax}</td>
        <td>{this.props.tempAvg}</td>    
        </tr>
      }
      if(this.props.checkhu){
        showhu = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.humidity[item.id-1]}</center></td></tr>)}
      </td>
        headHu = <th>Humidity</th>
        valuehu = <tr>
        <td><strong>Humidity</strong></td>
        <td>{this.props.huMin}</td> 
        <td>{this.props.huMax}</td>
        <td>{this.props.huAvg}</td>    
        </tr>

      }
      if(this.props.checkair){
        showair = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.pressure[item.id-1]}</center></td></tr>)}
      </td>
          headAir = <th>Air Pressure</th>
          valueair = <tr>
        <td><strong>Air Pressure</strong></td>
        <td>{this.props.airMin}</td> 
        <td>{this.props.airMax}</td>
        <td>{this.props.airAvg}</td>    
        </tr>
      }
      if(this.props.checkpm25){
        showpm25 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.pm25[item.id-1]}</center></td></tr>)}
      </td>
          headPm25 = <th>PM2.5</th>
          valuepm25 = <tr>
        <td><strong>PM2.5</strong></td>
        <td>{this.props.pm25Min}</td> 
        <td>{this.props.pm25Max}</td>
        <td>{this.props.pm25Avg}</td>    
        </tr>
      }
      if(this.props.checkpm10){
        showpm10 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.pm10[item.id-1]}</center></td></tr>)}
      </td>
          headPm10 = <th>pm10</th>
          valuepm10 = <tr>
        <td><strong>PM10</strong></td>
        <td>{this.props.pm10Min}</td> 
        <td>{this.props.pm10Max}</td>
        <td>{this.props.pm10Avg}</td>    
        </tr>
      }
      if(this.props.checko3){
        showo3 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.o3[item.id-1]}</center></td></tr>)}
      </td>
          headO3 = <th>O3</th>
          valueo3 = <tr>
        <td><strong>O3</strong></td>
        <td>{this.props.o3Min}</td> 
        <td>{this.props.o3Max}</td>
        <td>{this.props.o3Avg}</td>    
        </tr>
      }
      if(this.props.checkco){
        showco = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.co[item.id-1]}</center></td></tr>)}
      </td>
          headCo = <th>CO</th>
          valueco = <tr>
        <td><strong>CO</strong></td>
        <td>{this.props.coMin}</td> 
        <td>{this.props.coMax}</td>
        <td>{this.props.coAvg}</td>    
        </tr>
      }
      if(this.props.checkno2){
        showno2 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.no2[item.id-1]}</center></td></tr>)}
      </td>
          headNo2 = <th>NO2</th>
          valueno2 = <tr>
        <td><strong>NO2</strong></td>
        <td>{this.props.no2Min}</td> 
        <td>{this.props.no2Max}</td>
        <td>{this.props.no2Avg}</td>    
        </tr>
      }
      if(this.props.checkso2){
        showso2 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.so2[item.id-1]}</center></td></tr>)}
      </td>
          headSo2 = <th>SO2</th>
          valueso2 = <tr>
        <td><strong>SO2</strong></td>
        <td>{this.props.so2Min}</td> 
        <td>{this.props.so2Max}</td>
        <td>{this.props.so2Avg}</td>    
        </tr>
      }
      if(this.props.checkaqi){
        showaqi = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.props.aqi[item.id-1]}</center></td></tr>)}
      </td>
          headaqi = <th>AQI</th>
          valueaqi = <tr>
        <td><strong>AQI</strong></td>
        <td>{this.props.aqiMin}</td> 
        <td>{this.props.aqiMax}</td>
        <td>{this.props.aqiAvg}</td>    
        </tr>
      }
        return (
          <div className="animated fadeIn">
          <div><Row>
          <Col xs="12" lg="1"></Col>
            <Col xs="12" lg="10">
              <Card>
              <CardBody>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      {headTemp}{headHu}{headAir}{headPm25}{headPm10}{headO3}{headCo}{headNo2}{headSo2}{headaqi}
                    </tr>
                    </thead>
                    <tbody>
                        
                            <td>
                      {this.state.pageOfItems.map(item =>
                          <tr><td><center>{this.props.date[item.id-1]}</center></td></tr>)}
                    </td>
                    <td>
                      {this.state.pageOfItems.map(item =>
                          <tr><td><center>{this.props.time[item.id-1]}</center></td></tr>)}
                    </td>
                         {showtemp}{showhu}{showair}{showpm25}{showpm10}{showo3}{showco}{showno2}{showso2}{showaqi}
                    </tbody>
                  </Table> <small>showing {this.state.startindex} to {this.state.endindex} of {this.state.entries} entries</small>
    
                  <Paginations items={this.state.exampleItems} onChangePage={this.onChangePage}/>
                  <Row>
          <Col xs="12" lg="3"></Col>
            <Col xs="12" lg="5">
              <Card>
              <CardBody>
                  <Table responsive striped>
                    <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Min</th>
                      <th>Max</th>
                      <th>Average</th>
                    </tr>
                    </thead>
                    <tbody>
                    {valuetemp}{valuehu}{valueair}{valuepm25}{valuepm10}{valueo3}{valueco}{valueno2}{valueso2}{valueaqi}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
          </div>
                    
        );
    }
}
 
export default Tabledata;
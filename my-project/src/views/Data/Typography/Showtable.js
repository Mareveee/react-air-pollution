import React from 'react';
import Paginations from './Paginations';
import axios from 'axios';
import {  Card, CardBody,  Col,  Row, Table } from 'reactstrap';
import Showaqitable from './showaqitable'
 
class Showtable extends React.Component {
    constructor() {
        super();
        this.state = {
          date : [],
          time : [],
          humidity:[],
          temperature:[],
          pressure:[],
          pm25:[],
          pm10:[],
          o3:[],
          co:[],
          no2:[],
          so2:[],
          data:[],
          page:0,
          countpage:[],
          date1:"",
          date2:"",
          valHead:[],
          item:[],
          exampleItems: [],
          pageOfItems: [],
          startindex:0,
          endindex:0,
          tempMax:0,
          tempMin:0,
          tempAvg:0,
          huMax:0,
          huMin:0,
          huAvg:0,
          airMax:0,
          airMin:0,
          airAvg:0,
          pm25Max:0,
          pm25Min:0,
          pm25Avg:0,
          pm10Max:0,
          pm10Min:0,
          pm10Avg:0,
          o3Max:0,
          o3Min:0,
          o3Avg:0,
          coMax:0,
          coMin:0,
          coAvg:0,
          no2Max:0,
          no2Min:0,
          no2Avg:0,
          so2Max:0,
          so2Min:0,
          so2Avg:0,
          entries:0
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
      var t 
      var datef = "date1="
      var datel = "&date2="
      var get = "http://54.169.105.27:1880/historical?"
      datef = datef.concat(this.props.fromyear,"-",this.props.frommonth,"-",this.props.fromdate,"T",this.props.fromtime,":00")
      datel = datel.concat(this.props.toyear,"-",this.props.tomonth,"-",this.props.todate,"T",this.props.totime,":00&device=",this.props.deviceEUI)
      get = get.concat(datef,datel)
      let i;
      let totaltemp = 0
      let totalhu = 0
      let totalair = 0
      let totalpm25 = 0
      let totalpm10 = 0
      let totalo3 = 0
      let totalco = 0
      let totalno2 = 0
      let totalso2 = 0
      axios.get(get)
      .then(response =>{
        t = response.data.length
        this.setState({exampleItems: [...Array(t).keys()].map(i => ({ id: (i+1)})),})
        for(i=0;i<response.data.length;i++){
          totaltemp = totaltemp + response.data[i].temperature
          totalhu = totalhu + response.data[i].humidity
          totalair = totalair + response.data[i].pressure
          totalpm25 = totalpm25 + response.data[i].PM25
          totalpm10 = totalpm10 + response.data[i].PM10
          totalo3 = totalo3 + response.data[i].O3
          totalco = totalco + response.data[i].CO
          totalno2 = totalno2 + response.data[i].NO2
          totalso2 = totalso2 + response.data[i].SO2
          this.setState({date:this.state.date.concat([response.data[i].date.slice(0,10)])})
          this.setState({time:this.state.time.concat([response.data[i].date.slice(11,19)])})
          this.setState({temperature:this.state.temperature.concat([response.data[i].temperature])})
          this.setState({humidity:this.state.humidity.concat([response.data[i].humidity])})
          this.setState({pressure:this.state.pressure.concat([response.data[i].pressure])})
          this.setState({pm25:this.state.pm25.concat([response.data[i].PM25])})
          this.setState({pm10:this.state.pm10.concat([response.data[i].PM10])})
          this.setState({o3:this.state.o3.concat([response.data[i].O3])})
          this.setState({co:this.state.co.concat([response.data[i].CO])})
          this.setState({no2:this.state.no2.concat([response.data[i].NO2])})
          this.setState({so2:this.state.so2.concat([response.data[i].SO2])})
          this.setState({item:this.state.item.concat(i)})
        }
        totaltemp = (totaltemp / t).toFixed(2)
        totalhu = (totalhu / t).toFixed(2)
        totalair = (totalair / t).toFixed(2)
        totalpm25 = (totalpm25 / t).toFixed(2)
        totalpm10 = (totalpm10 / t).toFixed(2)
        totalo3 = (totalo3 / t).toFixed(2)
        totalco = (totalco / t).toFixed(2)
        totalno2 = (totalno2 / t).toFixed(2)
        totalso2 = (totalso2 / t).toFixed(2)
        this.setState({entries:t})
        this.setState({tempAvg:totaltemp})
        this.setState({huAvg:totalhu})
        this.setState({airAvg:totalair})
        this.setState({pm25Avg:totalpm25})
        this.setState({pm10Avg:totalpm10})
        this.setState({o3Avg:totalo3})
        this.setState({coAvg:totalco})
        this.setState({no2Avg:totalno2})
        this.setState({so2Avg:totalso2})
        this.setState({tempMax:Math.max(...this.state.temperature)})
        this.setState({tempMin:Math.min(...this.state.temperature)})
        this.setState({huMax:Math.max(...this.state.humidity)})
        this.setState({huMin:Math.min(...this.state.humidity)})
        this.setState({airMax:Math.max(...this.state.pressure)})
        this.setState({airMin:Math.min(...this.state.pressure)})
        this.setState({pm25Max:Math.max(...this.state.pm25)})
        this.setState({pm25Min:Math.min(...this.state.pm25)})
        this.setState({pm10Max:Math.max(...this.state.pm10)})
        this.setState({pm10Min:Math.min(...this.state.pm10)})
        this.setState({o3Max:Math.max(...this.state.o3)})
        this.setState({o3Min:Math.min(...this.state.o3)})
        this.setState({coMax:Math.max(...this.state.co)})
        this.setState({coMin:Math.min(...this.state.co)})
        this.setState({no2Max:Math.max(...this.state.no2)})
        this.setState({no2Min:Math.min(...this.state.no2)})
        this.setState({so2Max:Math.max(...this.state.so2)})
        this.setState({so2Min:Math.min(...this.state.so2)})
        if(this.props.checkTemp){
          this.state.valHead.push("Temperature")
        }
        if(this.props.checkHu){
          this.state.valHead.push("Humidity")
        }
        if(this.props.checkAir){
          this.state.valHead.push("Air Pressure")
        }
        if(this.props.checkpm25){
          this.state.valHead.push("PM2.5")
        }
        if(this.props.checkpm10){
          this.state.valHead.push("PM10")
        }
        if(this.props.checko3){
          this.state.valHead.push("O3")
        }
        if(this.props.checkco){
          this.state.valHead.push("CO")
        }
        if(this.props.checkno2){
          this.state.valHead.push("NO2")
        }
        if(this.props.checkso2){
          this.state.valHead.push("SO2")
        }
  
      })

    
    }
    
 
    render() {
      let show = null
      let showaqi = null
      let headTemp = null
      let headHu = null
      let headAir = null
      let headPm25 = null
      let headPm10 = null
      let headO3 = null
      let headCo = null
      let headNo2 = null
      let headSo2 = null
      let showtemp = []
      let showhu = []
      let showair = []
      let showpm25 = []
      let showpm10 = []
      let showo3 = []
      let showco = []
      let showno2 = []
      let showso2 = []
      let valuetemp = null
      let valuehu = null
      let valueair = null
      let valuepm25 = null
      let valuepm10 = null
      let valueo3 = null
      let valueco = null
      let valueno2 = null
      let valueso2 = null
      if(this.props.checkTemp){
        showtemp = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.temperature[item.id-1]}</center></td></tr>)}
      </td>
        headTemp = <th>Temperature</th>
        valuetemp = <tr>
        <td><strong>Temperature</strong></td>
        <td>{this.state.tempMin}</td> 
        <td>{this.state.tempMax}</td>
        <td>{this.state.tempAvg}</td>    
        </tr>
      }
      if(this.props.checkHu){
        showhu = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.humidity[item.id-1]}</center></td></tr>)}
      </td>
        headHu = <th>Humidity</th>
        valuehu = <tr>
        <td><strong>Humidity</strong></td>
        <td>{this.state.huMin}</td> 
        <td>{this.state.huMax}</td>
        <td>{this.state.huAvg}</td>    
        </tr>

      }
      if(this.props.checkAir){
        showair = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.pressure[item.id-1]}</center></td></tr>)}
      </td>
          headAir = <th>Air Pressure</th>
          valueair = <tr>
        <td><strong>Air Pressure</strong></td>
        <td>{this.state.airMin}</td> 
        <td>{this.state.airMax}</td>
        <td>{this.state.airAvg}</td>    
        </tr>
      }
      if(this.props.checkpm25){
        showpm25 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.pm25[item.id-1]}</center></td></tr>)}
      </td>
          headPm25 = <th>PM2.5</th>
          valuepm25 = <tr>
        <td><strong>PM2.5</strong></td>
        <td>{this.state.pm25Min}</td> 
        <td>{this.state.pm25Max}</td>
        <td>{this.state.pm25Avg}</td>    
        </tr>
      }
      if(this.props.checkpm10){
        showpm10 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.pm10[item.id-1]}</center></td></tr>)}
      </td>
          headPm10 = <th>pm10</th>
          valuepm10 = <tr>
        <td><strong>PM10</strong></td>
        <td>{this.state.pm10Min}</td> 
        <td>{this.state.pm10Max}</td>
        <td>{this.state.pm10Avg}</td>    
        </tr>
      }
      if(this.props.checko3){
        showo3 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.o3[item.id-1]}</center></td></tr>)}
      </td>
          headO3 = <th>O3</th>
          valueo3 = <tr>
        <td><strong>O3</strong></td>
        <td>{this.state.o3Min}</td> 
        <td>{this.state.o3Max}</td>
        <td>{this.state.o3Avg}</td>    
        </tr>
      }
      if(this.props.checkco){
        showco = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.co[item.id-1]}</center></td></tr>)}
      </td>
          headCo = <th>CO</th>
          valueco = <tr>
        <td><strong>CO</strong></td>
        <td>{this.state.coMin}</td> 
        <td>{this.state.coMax}</td>
        <td>{this.state.coAvg}</td>    
        </tr>
      }
      if(this.props.checkno2){
        showno2 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.no2[item.id-1]}</center></td></tr>)}
      </td>
          headNo2 = <th>NO2</th>
          valueno2 = <tr>
        <td><strong>NO2</strong></td>
        <td>{this.state.no2Min}</td> 
        <td>{this.state.no2Max}</td>
        <td>{this.state.no2Avg}</td>    
        </tr>
      }
      if(this.props.checkso2){
        showso2 = <td>
        {this.state.pageOfItems.map(item =>
            <tr><td><center>{this.state.so2[item.id-1]}</center></td></tr>)}
      </td>
          headSo2 = <th>SO2</th>
          valueso2 = <tr>
        <td><strong>SO2</strong></td>
        <td>{this.state.so2Min}</td> 
        <td>{this.state.so2Max}</td>
        <td>{this.state.so2Avg}</td>    
        </tr>
      }
      if(this.props.checkaqi){
        showaqi = <Showaqitable checkaqi={this.props.checkaqi} deviceName={this.props.deviceName}
        fromdate={this.props.fromdate} frommonth={this.props.frommonth} fromyear={this.props.fromyear} fromtime={this.props.fromtime}
        todate={this.props.todate} tomonth={this.props.tomonth} toyear={this.props.toyear} totime={this.props.totime}/>
      }
      if(this.props.checkTemp || this.props.checkHu|| this.props.checkAir|| this.props.checkpm25|| this.props.checkpm10
        || this.props.checko3|| this.props.checkco|| this.props.checkno2|| this.props.checkso2){
          show = <div><Row>
          <Col xs="12" lg="1"></Col>
            <Col xs="12" lg="10">
              <Card>
              <CardBody>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      {headTemp}{headHu}{headAir}{headPm25}{headPm10}{headO3}{headCo}{headNo2}{headSo2}
                    </tr>
                    </thead>
                    <tbody>
                    <td>
                      {this.state.pageOfItems.map(item =>
                          <tr><td><center>{this.state.date[item.id-1]}</center></td></tr>)}
                    </td>
                    <td>
                      {this.state.pageOfItems.map(item =>
                          <tr><td><center>{this.state.time[item.id-1]}</center></td></tr>)}
                    </td>
                    {showtemp}{showhu}{showair}{showpm25}{showpm10}{showo3}{showco}{showno2}{showso2}
                    </tbody>
                  </Table>
                  <small>showing {this.state.startindex} to {this.state.endindex} of {this.state.entries} entries</small>
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
                    {valuetemp}{valuehu}{valueair}{valuepm25}{valuepm10}{valueo3}{valueco}{valueno2}{valueso2}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
                </CardBody>
              </Card>
            </Col>
          </Row></div>
        }
        return (
          <div className="animated fadeIn">
           {show} {showaqi}
          </div>
                    
        );
    }
}
 
export default Showtable;
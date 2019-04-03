import React from 'react';
import Paginations from './Paginations';
import axios from 'axios';
import {  Card, CardBody,  Col,  Row, Table } from 'reactstrap';
 
class Showaqitable extends React.Component {
    constructor() {
        super();
        this.state = {
          date : [],
          time : [],
          aqi:[],
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
          aqiMax:0,
          aqiMin:0,
          aqiAvg:0,
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
      var get = "http://54.169.105.27:1880/AQIhistorical?"
      datef = datef.concat(this.props.fromyear,"-",this.props.frommonth,"-",this.props.fromdate,"T",this.props.fromtime,":00")
      datel = datel.concat(this.props.toyear,"-",this.props.tomonth,"-",this.props.todate,"T",this.props.totime,":00&device=",this.props.deviceName)
      get = get.concat(datef,datel)
      let i;
      let totalaqi = 0
      axios.get(get)
      .then(response =>{
        t = response.data.length
        this.setState({exampleItems: [...Array(t).keys()].map(i => ({ id: (i+1)})),})
        for(i=0;i<response.data.length;i++){
          totalaqi = totalaqi + response.data[i].AQINOW
          this.setState({date:this.state.date.concat([response.data[i].time.slice(0,10)])})
          this.setState({time:this.state.time.concat([response.data[i].time.slice(11,19)])})
          this.setState({aqi:this.state.aqi.concat([response.data[i].AQINOW])})
          this.setState({item:this.state.item.concat(i)})
        }
        totalaqi = (totalaqi / t).toFixed(2)
        this.setState({entries:t})
        this.setState({aqiAvg:totalaqi})
        this.setState({aqiMax:Math.max(...this.state.aqi)})
        this.setState({aqiMin:Math.min(...this.state.aqi)})
        if(this.props.checkaqi){
          this.state.valHead.push("AQI")
        }
      })

    
    }
    
 
    render() {
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
                        <th>AQI</th>
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
                      <td>
                        {this.state.pageOfItems.map(item =>
                            <tr><td><center>{this.state.aqi[item.id-1]}</center></td></tr>)}
                        </td>
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
                        <th>Min</th>
                        <th>Max</th>
                        <th>Average</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>{this.state.aqiMin}</td> 
                        <td>{this.state.aqiMax}</td>
                        <td>{this.state.aqiAvg}</td>    
                    </tr>
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
 
export default Showaqitable;
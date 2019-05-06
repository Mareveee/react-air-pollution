import React from 'react';
import axios from 'axios';
import {Col,Row,Button} from 'reactstrap';
import Graphdata from './Graphdata'
import Tabledata from './Tabledata'

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
          aqi:[],
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
          aqiMax:0,
          aqiMin:0,
          aqiAvg:0,
          entries:0,
          showgraph:false,
          showtable:false,
          datetime:[],
          length:0,
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
    showgraphh = () => {
      this.setState({showgraph:true});
      this.setState({showtable:false});
    }
    showtablee = () => {
      this.setState({showtable:true});
      this.setState({showgraph:false});
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
        this.setState({length:t})
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
          this.setState({datetime:this.state.datetime.concat([response.data[i].date.slice(0,10).concat(" ",response.data[i].date.slice(11,19))])})
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
      })
      


      var tt 
      var dateff = "date1="
      var datell = "&date2="
      var getaqi = "http://54.169.105.27:1880/AQIhistorical?"
      dateff = dateff.concat(this.props.fromyear,"-",this.props.frommonth,"-",this.props.fromdate,"T",this.props.fromtime,":00")
      datell = datell.concat(this.props.toyear,"-",this.props.tomonth,"-",this.props.todate,"T",this.props.totime,":00&device=",this.props.deviceName)
      getaqi = getaqi.concat(dateff,datell)
      console.log("getaqi",getaqi)
      let totalaqi = 0
      let x;
      axios.get(getaqi)
      .then(response =>{
        console.log(response.data)
        tt = response.data.length
        for(x=0;x<response.data.length;x++){
          totalaqi = totalaqi + response.data[x].AQINOW
          this.setState({aqi:this.state.aqi.concat([response.data[x].AQINOW])})
        }
        totalaqi = (totalaqi / tt).toFixed(2)
        this.setState({aqiAvg:totalaqi})
        this.setState({aqiMax:Math.max(...this.state.aqi)})
        this.setState({aqiMin:Math.min(...this.state.aqi)})
        
      })

    }
    
 
    render() {
      let show = null
      if(this.state.showgraph){
        show = <Graphdata time={this.state.datetime} temp={this.state.temperature} hu={this.state.humidity}
        air={this.state.pressure} pm10={this.state.pm10} pm25={this.state.pm25}
        o3={this.state.o3} co={this.state.co} no2={this.state.no2} so2={this.state.so2} aqi={this.state.aqi}
        checktemp={this.props.checkTemp} checkhu={this.props.checkHu} checkair={this.props.checkAir}
        checkpm25={this.props.checkpm25} checkpm10={this.props.checkpm10} checko3={this.props.checko3}
        checkco={this.props.checkco} checkno2={this.props.checkno2} checkso2={this.props.checkso2}
        checkaqi={this.props.checkaqi}/>
      }
      if(this.state.showtable){
        show=<Tabledata length={this.state.length} pageitem={this.state.pageOfItems} checktemp={this.props.checkTemp}
                        date={this.state.date} time={this.state.time} checkhu={this.props.checkHu} checkair={this.props.checkAir}
                        checkpm10={this.props.checkpm10} checkpm25={this.props.checkpm25} checko3={this.props.checko3}
                        checkco={this.props.checkco} checkno2={this.props.checkno2} checkso2={this.props.checkso2} checkaqi={this.props.checkaqi}
                        no2={this.state.no2} no2Min={this.state.no2Min} no2Max={this.state.no2Max} no2Avg={this.state.no2Avg}
                        so2={this.state.so2} so2Min={this.state.so2Min} so2Max={this.state.so2Max} so2Avg={this.state.so2Avg}
                        aqi={this.state.aqi} aqiMin={this.state.aqiMin} aqiMax={this.state.aqiMax} aqiAvg={this.state.aqiAvg}
                        co={this.state.co} coMin={this.state.coMin} coMax={this.state.coMax} coAvg={this.state.coAvg}
                        o3={this.state.o3} o3Min={this.state.o3Min} o3Max={this.state.o3Max} o3Avg={this.state.o3Avg}
                        pm10={this.state.pm10} pm10Min={this.state.pm10Min} pm10Max={this.state.pm10Max} pm10Avg={this.state.pm10Avg}
                        pm25={this.state.pm25} pm25Min={this.state.pm25Min} pm25Max={this.state.pm25Max} pm25Avg={this.state.pm25Avg}
                        humidity={this.state.humidity} huMin={this.state.huMin} huMax={this.state.huMax} huAvg={this.state.huAvg}
                        pressure={this.state.pressure} airMin={this.state.airMin} airMax={this.state.airMax} airAvg={this.state.airAvg}
                        temperature={this.state.temperature} tempMin={this.state.tempMin} tempMax={this.state.tempMax} tempAvg={this.state.tempAvg}/>
      }
      
      
        return (
          <div className="animated fadeIn">
           <Row>
          <Col xs="12" sm="6" lg="8"></Col>
          <Col xs="12" sm="6" lg="2">
                <Button active block color="primary" aria-pressed="true" onClick={this.showgraphh}>Graph</Button>
              </Col>
              <Col xs="12" sm="6" lg="2">
                <Button active block color="primary" aria-pressed="true" onClick={this.showtablee}>Table</Button>
              </Col>
        </Row><br/>
        {show}
          </div>
                    
        );
    }
}
 
export default Showtable;
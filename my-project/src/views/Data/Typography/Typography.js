import React, { Component } from 'react';
import Showdata from './Showdata'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './histoical.css'
import axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Typography extends Component {
  constructor(props){
    super(props)
    this.state = {
      showdata:false,
      isCheckedTemp: false,
      isCheckedHumidity:false,
      isCheckedAir:false,
      isCheckedPm25:false,
      isCheckedPm10:false,
      isCheckedO3:false,
      isCheckedCO:false,
      isCheckedNo2:false,
      isCheckedSO2:false,
      isCheckedAQI:false,
      selectedStartDay: undefined,
      selectedEndDay: undefined,
      selectedStartTime: undefined,
      selectedEndTime: undefined,
      selectedLocation:undefined,
      locationName:[],
      locationID:[],
      locationEUI:undefined
    }
    this.handleCheckedTemp = this.handleCheckedTemp.bind(this);
    this.handleCheckedHumidity = this.handleCheckedHumidity.bind(this);
    this.handleCheckedAir = this.handleCheckedAir.bind(this); 
    this.handleCheckedpm25 = this.handleCheckedpm25.bind(this); 
    this.handleCheckedpm10 = this.handleCheckedpm10.bind(this);
    this.handleCheckedo3 = this.handleCheckedo3.bind(this); 
    this.handleCheckedco = this.handleCheckedco.bind(this);
    this.handleCheckedno2 = this.handleCheckedno2.bind(this); 
    this.handleCheckedso2 = this.handleCheckedso2.bind(this);
    this.handleCheckedaqi = this.handleCheckedaqi.bind(this);
    this.handleStartDayChange = this.handleStartDayChange.bind(this);
    this.handleEndDayChange = this.handleEndDayChange.bind(this);
  }
  handleStartDayChange(day) {
    this.setState({ selectedStartDay: day });
    this.setState({showdata:false})
  }
  handleEndDayChange(day) {
    this.setState({ selectedEndDay: day });
    this.setState({showdata:false})
  }
 
handleCheckedTemp () {
  this.setState({isCheckedTemp: !this.state.isCheckedTemp});
  this.setState({showdata:false})
}
handleCheckedHumidity () {
  this.setState({isCheckedHumidity: !this.state.isCheckedHumidity});
  this.setState({showdata:false})
}
handleCheckedAir () {
  this.setState({isCheckedAir: !this.state.isCheckedAir});
  this.setState({showdata:false})
}
handleCheckedpm25 () {
  this.setState({isCheckedPm25: !this.state.isCheckedPm25});
  this.setState({showdata:false})
}
handleCheckedpm10 () {
  this.setState({isCheckedPm10: !this.state.isCheckedPm10});
  this.setState({showdata:false})
}
handleCheckedo3 () {
  this.setState({isCheckedO3: !this.state.isCheckedO3});
  this.setState({showdata:false})
}
handleCheckedco () {
  this.setState({isCheckedCO: !this.state.isCheckedCO});
  this.setState({showdata:false})
}
handleCheckedno2 () {
  this.setState({isCheckedNo2: !this.state.isCheckedNo2});
  this.setState({showdata:false})
}
handleCheckedso2 () {
  this.setState({isCheckedSO2: !this.state.isCheckedSO2});
  this.setState({showdata:false})
}
handleCheckedaqi () {
  this.setState({isCheckedAQI: !this.state.isCheckedAQI});
  this.setState({showdata:false})
}
handleLocationChange = () => {
  let selectedValue = document.getElementById("location").value;
  if(selectedValue === ''){
    this.setState({ selectedLocation: undefined });
  }
  else{
    this.setState({ selectedLocation: selectedValue });
    this.setState({locationEUI:this.state.locationID[this.state.locationName.indexOf(selectedValue)]})
  }
  this.setState({showdata:false})
}

getFromTime = () => {
    let selectedValue = document.getElementById("formtime").value;
    if(selectedValue==='--:--'){
      this.setState({selectedStartTime:undefined})
    }else{
      this.setState({selectedStartTime:selectedValue})
    }
    this.setState({showdata:false})
    return selectedValue;
}

getToTime = () => {
    let selectedValue = document.getElementById("totime").value;
    if(selectedValue === '--:--'){
      this.setState({selectedEndTime:undefined})
    }else{
      this.setState({selectedEndTime:selectedValue})
    }
    this.setState({showdata:false})
    return selectedValue;
}
componentWillMount(){
  let i
  axios.get('http://54.169.105.27:1880/device')
  .then(response => {
    for(i=0;i<response.data.length;i++){
      this.setState({locationName:this.state.locationName.concat([response.data[i].deviceName])})
      this.setState({locationID:this.state.locationID.concat([response.data[i]._id])})    }
  })
}
  render() {
    const { selectedStartDay } = this.state;
    const { selectedEndDay } = this.state;
    const { selectedStartTime } = this.state;
    const { selectedEndTime } = this.state;
    let showdatas = null
    if(this.state.showdata){
      if(this.state.selectedStartDay === undefined || this.state.selectedEndDay === undefined || this.state.selectedStartTime === undefined || this.state.selectedEndTime === undefined || 
        ((!this.state.isCheckedTemp)&&(!this.state.isCheckedHumidity)&&(!this.state.isCheckedAir)&&(!this.state.isCheckedPm25)&&(!this.state.isCheckedPm10)
        &&(!this.state.isCheckedO3)&&(!this.state.isCheckedCO)&&(!this.state.isCheckedNo2)&&(!this.state.isCheckedSO2)&&(!this.state.isCheckedAQI)) || this.state.selectedLocation===undefined){
        if(this.state.selectedLocation===undefined){
          showdatas = <div>
          {alert('Please select Location')}
          </div>
        }
        else if((!this.state.isCheckedTemp)&&(!this.state.isCheckedHumidity)&&(!this.state.isCheckedAir)&&(!this.state.isCheckedPm25)&&(!this.state.isCheckedPm10)&&(!this.state.isCheckedO3)&&(!this.state.isCheckedCO)&&(!this.state.isCheckedNo2)&&(!this.state.isCheckedSO2)&&(!this.state.isCheckedAQI)){
          showdatas = <div>
          {alert('Please select Parameter')}
          </div>
        }else{
          showdatas = <div>
          {alert('Please select date and time')}
          </div>
        }
      }
      else{
        showdatas = <Showdata startDate={this.state.selectedStartDay} endDate={this.state.selectedEndDay}
                              startTime={this.state.selectedStartTime} endTime={this.state.selectedEndTime} show={this.state.showdata}
                              checkTemp={this.state.isCheckedTemp} checkHu={this.state.isCheckedHumidity} checkAir={this.state.isCheckedAir}
                              checkpm25={this.state.isCheckedPm25} checkpm10={this.state.isCheckedPm10} checko3={this.state.isCheckedO3}
                              checkco={this.state.isCheckedCO} checkno2={this.state.isCheckedNo2} checkso2={this.state.isCheckedSO2}
                              checkaqi={this.state.isCheckedAQI}
                              deviceEUI={this.state.locationEUI}
                              deviceName={this.state.selectedLocation}/>
    }
    }
    return (
      
      <div className="animated fadeIn">
        <Card>
              <CardHeader>
                <strong>Historical Data Form</strong>
              </CardHeader>
              <CardBody>
                <Row>
                <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Location</Label>
                      <Input type="select" name="location" id="location" onChange={this.handleLocationChange}>
                        <option value={undefined}></option>
                        {this.state.locationName.map(datas => <option value={datas.id}>{datas}</option>)}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox" id="checktemp" onChange={ this.handleCheckedTemp }/>
                  <label for="checktemp"></label></div>
                  <strong className="txtparam">Temperature</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkhumidity" onChange={ this.handleCheckedHumidity }/>
                  <label for="checkhumidity"></label></div>
                  <strong className="txtparam">Humidity</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkAir" onChange={ this.handleCheckedAir }/>
                  <label for="checkAir"></label></div>
                  <strong className="txtparam">Air Pressure</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkpm25" onChange={ this.handleCheckedpm25 }/>
                  <label for="checkpm25"></label></div>
                  <strong className="txtparam">Dust PM2.5</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkpm10" onChange={ this.handleCheckedpm10 }/>
                  <label for="checkpm10"></label></div>
                  <strong className="txtparam">Dust Pm10</strong>
                  </Col>
                </Row>
                <br/>
                <Row>
                <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checko3" onChange={ this.handleCheckedo3 }/>
                  <label for="checko3"></label></div>
                  <strong className="txtparam">O3</strong>
                  </Col>
                <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkco" onChange={ this.handleCheckedco }/>
                  <label for="checkco"></label></div>
                  <strong className="txtparam">CO</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkno2" onChange={ this.handleCheckedno2 }/>
                  <label for="checkno2"></label></div>
                  <strong className="txtparam">NO2</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkso2" onChange={ this.handleCheckedso2 }/>
                  <label for="checkso2"></label></div>
                  <strong className="txtparam">SO2</strong>
                  </Col>
                  <Col xs="2">
                  <div className="divBox">
                  <input type="checkbox"  id="checkaqi" onChange={ this.handleCheckedaqi }/>
                  <label for="checkaqi"></label></div>
                  <strong className="txtparam">AQI</strong>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <Row>
                  <Col xs="3">
                    {selectedStartDay && <p>Start Date: {selectedStartDay.toLocaleDateString()}</p>}
                    {!selectedStartDay && <p>Choose a Start Date</p>}
                    <DayPickerInput 
                    onDayChange={this.handleStartDayChange}/>
                  </Col>
                  <Col xs="3">
                    {selectedEndDay && <p>End Date: {selectedEndDay.toLocaleDateString()}</p>}
                    {!selectedEndDay && <p>Choose a End Date</p>}
                    <DayPickerInput 
                    onDayChange={this.handleEndDayChange} />
                  </Col>
                  
                  <Col xs="3">
                  <FormGroup>
                  {selectedStartTime && <p>Start Time: {selectedStartTime}</p>}
                    {!selectedStartTime && <p>Choose a Start Time</p>}
                      <Input type="select" name="formtime" id="formtime" onChange={this.getFromTime}>
                        <option value={undefined}>--:--</option>
                        <option value="00:00">00:00</option>
                        <option value="01:00">01:00</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                    {selectedEndTime && <p>End Time: {selectedEndTime}</p>}
                    {!selectedEndTime && <p>Choose a End Time</p>}
                      <Input type="select" name="totime" id="totime" onChange={this.getToTime}>
                        <option value={undefined}>--:--</option>
                        <option value="00:00">00:00</option>
                        <option value="01:00">01:00</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <Row>
                <Col xs="12" sm="6" lg="10"></Col>
          <Col xs="12" sm="6" lg="2">
            <Button active block color="dark" aria-pressed="true" onClick={()=>this.setState({showdata:true})}>Show</Button>
          </Col>
                </Row>
              </CardBody>
            </Card>
            {showdatas}
      </div>
    );
  }
}

export default Typography;

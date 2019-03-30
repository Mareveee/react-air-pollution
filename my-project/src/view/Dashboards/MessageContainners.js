import { subscribe } from 'mqtt-react';
import React from 'react'
import Dashboardsshow from './Dashboardsshow'


let valtemp = [0,0,0,0,0]
let valhu = [0,0,0,0,0]
let valair = [0,0,0,0,0]
function MessageList(props){
    let valuetemp
    let valuehu
    let valueair
    let valuebatt
    const object = props.data[0]
    if(object != undefined){
        const data = Object.keys(object);
        valuetemp = object[data[0]]
        valuehu = object[data[1]]
        valueair = object[data[2]]
        valuebatt = object[data[3]]
        valtemp.push(valuetemp)
        valtemp.shift()
        valhu.push(valuehu)
        valhu.shift()
        valair.push(valueair)
        valair.shift()
        //listItems = data.map((dkeys) =>
          // Correct! Key should be specified inside the array.
          //<ListItem keys={dkeys.toString()}
               //     value={object[dkeys.toString()]} />
        //);
    }
    else{
        valuebatt=100
        valtemp.push(27)
        valtemp.shift()
        valhu.push(83)
        valhu.shift()
        valair.push(1008.8)
        valair.shift()
    }
    return (
        <Dashboardsshow valuetemp={valtemp[4]} valuehu={valhu[4]} valueair={valair[4]} valuebatt={valuebatt} 
                       linetemp1={valtemp[0]} linetemp2={valtemp[1]} linetemp3={valtemp[2]} linetemp4={valtemp[3]} linetemp5={valtemp[4]}
                       linehu1={valhu[0]} linehu2={valhu[1]} linehu3={valhu[2]} linehu4={valhu[3]} linehu5={valhu[4]}
                       lineair1={valair[0]} lineair2={valair[1]} lineair3={valair[2]} lineair4={valair[3]} lineair5={valair[4]}/>
      );
}
 
export default subscribe({topic: 'application/Newmsg'})(MessageList)
// Add Time Picker


import 'rc-time-picker/assets/index.css';
import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import confirm from './confirm.js';
import Data from './dataKey.json';

function onChange(value) {
 return JSON.stringify(value && value.format(format));
}

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

// Update times


function TimePickers() {

  if(confirm === false) {
    return console.log("gagal")
  } else {
    function putData() {
      for(let i = 0; i < Data.length; i++) {
        fetch('https://bv-online-assessment.herokuapp.com/api/bookings/'+ Data[0].key+ '/update-eta',{
            method:'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({arrival_time: {onChange}})
        }).then(response=>{
            return response.json()
        }).then(data=> 
        // this is the data we get after putting our data,
        console.log(data)
        );
      }
    }
  return (
    <TimePicker
    showSecond={false}
    className="xxx"
    onChange = {putData}
    format={format}
    use12Hours
    inputReadOnly
  />
    )
  }
}

export default TimePickers;

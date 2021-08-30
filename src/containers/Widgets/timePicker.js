// Add Time Picker

import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

import confirm from './confirm.js';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

const myDataObject = {
  arrival_time: "10:00"
}

// Update times

const putData = async ( ) =>{
  const response = await fetch('https://bv-online-assessment.herokuapp.com/api/bookings/:booking_code/update-eta', {
      method: 'PUT', 
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(myDataObject)
  });
 
  const data = await response.json();
  console.log(data);
 };



function Coba() {

  if(confirm === false) {
    return console.log("gagal")
  } else {
  return (
    <TimePicker
      showSecond={false}
      defaultValue={now}
      className="xxx"
      onChange={putData}
      format={format}
      use12Hours
      inputReadOnly
    />
    )
  }
}

export default Coba;

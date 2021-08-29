// Add time picker

import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

import confirm from './confirm.js';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);


function Coba() {
  if(confirm === false) {
    return console.log("gagal")
  } else {
  return (
    <TimePicker
      showSecond={false}
      defaultValue={now}
      className="TimePicker"
      format={format}
      use12Hours
      inputReadOnly
    />
    )
  }
}

export default Coba;

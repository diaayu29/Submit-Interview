import React, {useState} from 'react';
import Coba from './timePicker';
import ReactDOM from 'react-dom';
function Warning() {
  function clickHandle(e) {
    e.target.innerText = "(Thank you! Your host has been informed about your arrival)"
  }

  
  return (
    <>
      
        <span onClick={clickHandle}>(Please set yor arrival time)</span>
     
    </>
  )
}

export default Warning;
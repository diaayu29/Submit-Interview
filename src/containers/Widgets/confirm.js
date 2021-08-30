import Data from './dataKey.json';
import React from 'react';
import ReactDOM from 'react-dom';
import TimePickers from './timePicker'
import TextAlert from './TextAlert';

// Add data when the booking code is true

function confirm() {
  const value = document.getElementsByClassName("SearchKey")[0]

  for(let i = 0; i < Data.length; i++) {
    if(value.value !== Data[i].key) {
      value.nextSibling.style.color = "red"
      ReactDOM.render(
        <div>
          <p>Should be combination of numbers & alphabets</p>
        </div>,
        document.getElementById("printData")
      )
   
    } else if(value.value === Data[i].key){
       fetch("https://bv-online-assessment.herokuapp.com/api/bookings")
       .then(res => res.json())
       .then(result => {
       
         value.nextSibling.style.color = "black"
         ReactDOM.render(
          <div>
            <img src={result[i].profile_picture} />
            <p>Hi, {result[i].guest_name}</p>
            <p>Thank you for booking with Bukit Vista. Here are the details of yor current booking :</p>
            <p>Property Name : {result[i].property_name}</p>
            <span>Check in date : {result[i].check_in_date}</span>
            <span>Check out date : {result[i].check_out_date}</span>
            <p id="ArrivalTime">Arrival time : <TimePickers></TimePickers> <TextAlert></TextAlert></p>
          </div>,
          document.getElementById("printData")
         )
     })
    }
  } 
}

export default confirm;
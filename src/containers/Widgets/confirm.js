import Data from './dataKey.json';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Coba from './timePicker'
import Warning from './warning';
// import axios from 'axios';


// function handleUpdate(data) {
//   const requestOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
// };
//   console.log(data.target);
//   axios.put("https://bv-online-assessment.herokuapp.com/api/bookings/:booking_code/update-eta", requestOptions)
//   .then(res => console.log(res))
// }

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
            <p id="ArrivalTime">Arrival time : <Coba></Coba> <Warning></Warning></p>
          </div>,
          document.getElementById("printData")
         )
     })
    }
  } 
}

export default confirm;
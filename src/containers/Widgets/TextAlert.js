// Add change when time clicked

import React from 'react';

function TextAlert() {
  function clickHandle(e) {
    e.target.innerText = "(Thank you! Your host has been informed about your arrival)"
  }
  return (
    <>
        <span onClick={clickHandle}>(Please set yor arrival time)</span>
    </>
  )
}

export default TextAlert;
import React, { Component } from 'react';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import confirm from './confirm.js';

// Return template to enter code

export default class extends Component {
  render() {
    const wisgetPageStyle = {
      display: 'block',
      margin: 'auto'
    };
 
    return (
      <LayoutWrapper>
        <div className="Coba" id="Coba" style={wisgetPageStyle}>
          <h4>Your Booking Code</h4>
          <input placeholder="KJSH87HGDK" className="SearchKey" onInput={confirm} >
          </input>
          <div className="cetakData" id="printData"></div>
        </div>
      </LayoutWrapper>
    );
  }
}

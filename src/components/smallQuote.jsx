import React from 'react';
import { css, jsx } from '@emotion/core';
import {RedCheckOutBox, CheckOutBox, PeopleIcon, CheckOutTitle, FormattedCheckOut} from '../css/checkOutCSS.js';

function SmallQuote(props) {
  console.log('these are mother fucking props',props.price)
  return (
    <div style={{ "display": "inline-block", "width": 165, "textAlign": "left", "fontSize": 13, "color": "#4A4A4A", "marginLeft": 10, "marginRight": 10, "float": "left" }}>
<div style={{ "display": "inline-block", "float": "left"}}>{props.price.name}</div>
    <div style={{ "display": "inline-block", "fontSize": 11, "textAlign": "center", marginLeft: '5px', float: 'left'}}><i class="fas fa-external-link-alt"></i></div>
    <div style={{ "display": "inline-block", "overflow": "hidden", width:20}}><span>..........</span></div>
  <div style={{ "display": "inline-block", "float": "right", "fontWeight": 700}}>${props.price.price}</div>
  </div>
  )
}

export default SmallQuote;
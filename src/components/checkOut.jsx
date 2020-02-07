import React from 'react';
import { css, jsx } from '@emotion/core';
import {RedCheckOutBox, CheckOutBox, PeopleIcon, CheckOutTitle, FormattedCheckOut} from '../css/checkOutCSS.js';

function CheckOut(props) {
  return (
    <RedCheckOutBox onClick={(e) => {props.handleCheckOutClick(e)}}>
      <CheckOutBox>
        <PeopleIcon><i className="far fa-calendar-alt"></i></PeopleIcon>
        <div style={{display: 'inline-block', float: 'left'}}>
          <CheckOutTitle>Check Out</CheckOutTitle>
          <FormattedCheckOut>{props.formattedCheckOut}</FormattedCheckOut>
        </div>
      </CheckOutBox>
    </RedCheckOutBox>
  )
}

export default CheckOut;
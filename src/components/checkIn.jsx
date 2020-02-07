import React from 'react';
import { css, jsx } from '@emotion/core';
import {GreenCheckInBox, CheckInBox, PeopleIcon, CheckInTitle, FormattedCheckIn} from '../css/checkInCSS.js';

function CheckIn(props) {
  return (
    <GreenCheckInBox onClick={(e) => {props.handleCheckInClick(e)}}>
      <CheckInBox>
        <PeopleIcon><i className="far fa-calendar-alt"></i></PeopleIcon>
        <div style={{display: 'inline-block', float: 'left'}}>
          <CheckInTitle>Check In</CheckInTitle>
          <FormattedCheckIn>{props.formattedCheckIn}</FormattedCheckIn>
        </div>
      </CheckInBox>
    </GreenCheckInBox>
  )
}

export default CheckIn;
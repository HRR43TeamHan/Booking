import React from 'react';
import { css, jsx } from '@emotion/core';
import {TripDetailsContainer, DetailsIcon, DetailsTitle, FormattedDetailsInfo} from '../css/tripDetailsCSS.js';

function TripDetails(props) {
  return (
  <TripDetailsContainer onClick={(e) => {props.handleGuestInfoClick(e)}}>
    <DetailsIcon><i className="fas fa-user-friends"></i></DetailsIcon>
    <div style={{display: 'inline-block', float: 'left'}}>
          <DetailsTitle>Guests</DetailsTitle>
          <FormattedDetailsInfo>{props.rooms} room, {props.adults} adults, {props.children} children</FormattedDetailsInfo>
        </div>
  </TripDetailsContainer>
  )
}

export default TripDetails;
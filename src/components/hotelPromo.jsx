import React from 'react';
import { css, jsx } from '@emotion/core';
import { HotelPromoContainer, PromoIcon, DealIntro, HotelDeal } from '../css/hotelPromoCSS.js';


function HotelPromo(props) {
  return (
    <HotelPromoContainer>
      <div style={{ margin: '11px' }}>
        <PromoIcon><i className="fas fa-tag"></i></PromoIcon>
        <DealIntro>Hotel Direct Offer!</DealIntro>
        <HotelDeal>{props.deal}</HotelDeal>
      </div>
    </HotelPromoContainer>
  )
}

export default HotelPromo;
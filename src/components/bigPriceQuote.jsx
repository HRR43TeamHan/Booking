import React from 'react';
import { css, jsx } from '@emotion/core';
import {BigQuoteContainer, LogoContainer, BigQuoteButton, PriceQuote} from '../css/bigPriceQuoteCSS.js';

function BigPriceQuote(props) {
  return (
    <BigQuoteContainer>
      <LogoContainer>{props.logo}.com</LogoContainer>
      <BigQuoteButton>View Deal</BigQuoteButton>
      <PriceQuote>${props.price}</PriceQuote>
    </BigQuoteContainer>
  )
}

export default BigPriceQuote;


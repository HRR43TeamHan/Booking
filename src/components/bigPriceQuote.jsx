import React from 'react';
import { css, jsx } from '@emotion/core';
import {BigQuoteContainer, LogoContainer} from '../css/bigPriceQuoteCSS.js';

function BigPriceQuote(props) {
  return (
    <BigQuoteContainer>
      <LogoContainer><i class="fas fa-skull"></i>.com</LogoContainer>
    </BigQuoteContainer>
  )
}

export default BigPriceQuote;


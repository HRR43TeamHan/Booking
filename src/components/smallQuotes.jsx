import React from 'react';
import { css, jsx } from '@emotion/core';
import SmallQuote from './smallQuote.jsx';
import { SmallQuotesContainer } from '../css/smallQuotesCSS.js';

function SmallQuotes(props) {
  return (
    <SmallQuotesContainer>
      <div style={{ float: 'center' }}>
        <SmallQuote price={props.prices[3]} />
        <SmallQuote price={props.prices[4]} />
      </div>

      <div style={{ float: 'center' }}>
        <SmallQuote price={props.prices[5]} />
        <div style={{ "display": "inline-block", "width": 165, "textAlign": "left", "fontSize": 13, "color": "#4A4A4A", "marginLeft": 10, "marginRight": 10, "float": "left", fontWeight: '700'}}>View all 20 deals <i className="fas fa-caret-down" style={{marginLeft: '5px'}}></i></div>
      </div>
    </SmallQuotesContainer >
  )
}

export default SmallQuotes;

// <button style={{ "float": "right", "display": "inline-block", "padding": "8px 16px", "height": 42, "width": 120, "fontWeight": 700, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "border": "1px solid transparent", "borderRadius": 2, "fontSize": 16, "textAlign": "center", "cursor": "pointer", "borderColor": "#fc0 #e4a000 #e4a000 #fc0", "backgroundColor": "rgb(255, 204, 0)", "color": "black", "marginTop": 20 }}>View Deal</button>
// <div style={{ "float": "right", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 80, "height": 41, "color": "black", "marginLeft": 15, "marginTop": 25, "fontSize": 24, "display": "inline-block", "fontWeight": 600 }}>${this.state.prices[0].price}</div>


import styled from '@emotion/styled'

export const BigQuoteContainer = styled.div({
  height: '88px',
  width: '363px',
  borderBottom: '1px solid #d6d6d6',
  display: 'inline-block',
  align: 'center',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
});


export const LogoContainer = styled.div({
  display: 'inline-block',
  float: 'left',
  width: '100px',
  height: '41px',
  color: 'purple',
  margin: '20px 0px 0px 15px',
  fontSize: '30px',
});


export const DealIntro = styled.span({
  color: '#D91E18',
  fontWeight: '600',
  fontSize: '15px',
  textAlign: 'center',
});

export const HotelDeal = styled.span({
  color: '#767676',
  fontWeight: '500',
  fontSize: '15px',
  textAlign: 'center',
  marginLeft: '8px'
});
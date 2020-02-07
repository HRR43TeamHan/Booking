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
  margin: '20px 0px 0px 15px',
  fontSize: '30px',
});

export const BigQuoteButton = styled.button({
  float: 'right',
  display: 'inline-block',
  padding: '8px 16px',
  height: '42px',
  width: '120px',
  fontWeight: '700',
  border: '1px solid transparent',
  borderRadius: '2px',
  fontSize: '16px',
  textAlign: 'center',
  cursor: 'pointer',
  borderColor: '#fc0 #e4a000 #e4a000 #fc0',
  backgroundColor: 'rgb(255, 204, 0)',
  color: 'black',
  marginTop: '20px',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const PriceQuote = styled.div({
  float: 'right',
  width: '80px',
  height: '41px',
  color: 'black',
  marginLeft: '15px',
  marginTop: '25px',
  fontSize: '24px',
  display: 'inline-block',
  fontWeight: '600',
});
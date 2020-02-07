import styled from '@emotion/styled'

export const HotelPromoContainer = styled.div({
  display: 'inline-block',
  height: '42px',
  width: '363px',
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '1px solid #D91E18',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
    color: '#767676',
  },
});


export const PromoIcon = styled.span({
  color: '#D91E18',
  marginRight: '8px'
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
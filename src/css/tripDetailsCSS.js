import styled from '@emotion/styled'

export const TripDetailsContainer = styled.div({
  display: 'inline-block',
  height: '42px',
  width: '363px',
  backgroundColor: 'white',
  borderRadius: '3px',
  border: '1px solid #D6D6D6',
  cursor: 'pointer',
});

export const DetailsIcon = styled.div({
  float:'left',
  textAlign: 'center',
  display: 'inline-block',
  height: '44px',
  width: '44px',
  color: '#767676',
  fontSize: '18px',
  margin: '13px 0px 0px -3px',
});


export const DetailsTitle= styled.div({
  textAlign: 'left',
  fontSize: '13px',
  color: '#4A4A4A',
  margin: '5px 0px 5px -3px',
  fontWeight: '300',
});

export const FormattedDetailsInfo = styled.div({
  textAlign: 'left',
  fontSize: '14px',
  color: 'rgba(0, 0,. 0, 0.85)',
  fontWeight: '700',
  marginLeft: '-3px',
});
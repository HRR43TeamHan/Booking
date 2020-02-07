import React from 'react';
import CheckIn from './checkIn.jsx';
import CheckOut from './checkOut.jsx';
import TripDetails from './tripDetails.jsx';


function SessionInputForms(props) {
  return (
    <div>
      <div style={{marginBottom: '3px'}}>
        <CheckIn handleCheckInClick={props.handleCheckInClick} formattedCheckIn={props.formattedCheckIn} />
        <div style={{display: 'inline-block', width: '8px'}}></div>
        <CheckOut handleCheckOutClick={props.handleCheckOutClick} formattedCheckOut={props.formattedCheckOut} />
      </div>
      <TripDetails handleGuestInfoClick={props.handleGuestInfoClick} rooms={props.rooms} adults={props.adults} children={props.children}/>
    </div>
  )
}

export default SessionInputForms;
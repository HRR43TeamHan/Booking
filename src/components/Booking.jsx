import React from 'react';
import months from '../months.js';
import days from '../days.js';
import { css, jsx } from '@emotion/core';
import {BookingWidget} from '../css/BookingCSS.js';
import CurrentlyViewing from './currentlyViewing.jsx';
import SessionInputForms from './sessionInputForms.jsx';
import HotelPromo from './HotelPromo.jsx';
import BigPriceQuote from './bigPriceQuote.jsx';
import Calendar from './calendar.jsx';


class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.pathname.replace(/\//g, ''),
      deal: '',
      prices: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
      viewersMessage: this.generateViewersMessage(),
      sessionCheckIn: 42,
      sessionCheckOut: 47,
      sessionLengthOfStay: 1,
      sessionRooms: 1,
      sessionChildren: 0,
      sessionAdults: 2,
      months: months,
      days: days,
      leftMonthIndex: 2,
      rightMonthIndex: 3,
      areCheckInCalendarsActive: false,
      areCheckOutCalendarsActive: false,
      isGuestInformationActive: false,
      isSmallQuotesDisplayActive: false,
      isDisclaimerActive: false
    }
  }

  componentDidMount() {
    fetch('/api/booking/' + this.state.id, {
      method: 'POST',
      body: JSON.stringify({ checkIn: this.state.sessionCheckIn, checkOut: this.state.sessionCheckOut, adults: this.state.sessionAdults, children: this.state.sessionChildren }),
      headers: { 'Content-type': 'application/json' }
    })
      .then((data) => {
        return data.json()
      })
      .then((dataJson) => {
        this.setState({
          deal: dataJson.deal,
          prices: dataJson.prices
        })
      });
  }

  generateViewersMessage() {
    let viewers = Math.floor(Math.random() * 10);
    if (viewers === 0) {
      return "Lowest prices for your stay";
    } else if (viewers === 1) {
      return `${viewers} person is viewing this hotel`;
    } else {
      return `${viewers} people are viewing this hotel`;
    }
  }

  handleCalendarToggleMonthLeft(e) {
    if (this.state.leftMonthIndex > 2) {
      let newLeftMonthIndex = this.state.leftMonthIndex -= 1;
      let newRightMonthIndex = this.state.rightMonthIndex -= 1;
      this.setState({
        leftMonthIndex: newLeftMonthIndex,
        rightMonthIndex: newRightMonthIndex
      })
    }
  }

  handleCalendarToggleMonthRight(e) {
    if (this.state.leftMonthIndex < 11) {
      let newLeftMonthIndex = this.state.leftMonthIndex += 1;
      let newRightMonthIndex = this.state.rightMonthIndex += 1;
      this.setState({
        leftMonthIndex: newLeftMonthIndex,
        rightMonthIndex: newRightMonthIndex
      })
    }
  }

  handleCalendarRowItemClick(dayIndex, e) {
    if (this.state.areCheckInCalendarsActive) {
      if (dayIndex >= this.state.sessionCheckOut) {
        let newSessionCheckOut = dayIndex + this.state.sessionCheckOut - this.state.sessionCheckIn;
        this.setState({
          sessionCheckIn: dayIndex,
          sessionCheckOut: newSessionCheckOut,
          areCheckInCalendarsActive: false,
          areCheckOutCalendarsActive: true,
        })
      } else {
        this.setState({
          sessionCheckIn: dayIndex,
          areCheckInCalendarsActive: false,
          areCheckOutCalendarsActive: true,
        })
      }
    } else {
      if(dayIndex <= this.state.sessionCheckIn) {
        let newSessionCheckIn = dayIndex - (this.state.sessionCheckOut - this.state.sessionCheckIn)
        this.setState({
          sessionCheckIn: newSessionCheckIn,
          sessionCheckOut: dayIndex,
          areCheckOutCalendarsActive: false,
          isGuestInformationActive:true
        })
      } else {
        this.setState({
          sessionCheckOut: dayIndex,
          areCheckOutCalendarsActive: false,
          isGuestInformationActive:true
        })
      }
    }
    fetch('/api/booking/' + this.state.id, {
      method: 'POST',
      body: JSON.stringify({ checkIn: this.state.sessionCheckIn, checkOut: this.state.sessionCheckOut, adults: this.state.sessionAdults, children: this.state.sessionChildren }),
      headers: { 'Content-type': 'application/json' }
    })
      .then((data) => {
        return data.json()
      })
      .then((dataJson) => {
        this.setState({
          deal: dataJson.deal,
          prices: dataJson.prices
        })
      });
  }


  handleGuestInfoClose(e) {
    this.setState({
      isGuestInformationActive: false
    })
  }

  handleGuestInfoClick(e) {
    let newValue = !this.state.isGuestInformationActive
    this.setState({
      isGuestInformationActive: newValue,
      areCheckInCalendarsActive: false,
      areCheckOutCalendarsActive: false
    });
  }

  handleCheckInClick(e) {
    let newValue = !this.state.areCheckInCalendarsActive
    this.setState({
      areCheckInCalendarsActive: newValue,
      isGuestInformationActive: false,
      areCheckOutCalendarsActive: false
    });
  }

  handleCheckOutClick(e) {
    let newValue = !this.state.areCheckOutCalendarsActive
    this.setState({
      areCheckOutCalendarsActive: newValue,
      isGuestInformationActive: false,
      areCheckInCalendarsActive: false
    });
  }


  handleToggleUpGuestInfoCategory(guestInfoCategory, e) {
    let newValue = this.state[guestInfoCategory]++;
    this.setState({
      guestInfoCategory: newValue
    })
  }

  handleToggleDownGuestInfoCategory(guestInfoCategory, e) {
    if (guestInfoCategory === 'sessionChildren') {
      if (this.state[guestInfoCategory] !== 0) {
        let newValue = this.state[guestInfoCategory]--;
        this.setState({
          guestInfoCategory: newValue
        })
      }
    } else {
      if (this.state[guestInfoCategory] !== 1) {
        let newValue = this.state[guestInfoCategory]--;
        this.setState({
          guestInfoCategory: newValue
        })
      }
    }
  }

  handleGuestInfoUpdateClick(e) {
    this.setState({
      isGuestInformationActive: false
    })
    fetch('/api/booking/' + this.state.id, {
      method: 'POST',
      body: JSON.stringify({ checkIn: this.state.sessionCheckIn, checkOut: this.state.sessionCheckOut, adults: this.state.sessionAdults, children: this.state.sessionChildren }),
      headers: { 'Content-type': 'application/json' }
    })
      .then((data) => {
        return data.json()
      })
      .then((dataJson) => {
        this.setState({
          deal: dataJson.deal,
          prices: dataJson.prices
        })
      });
  }

  render() {
    return (
      <div>
        <BookingWidget>
          {<CurrentlyViewing viewersMessage={this.state.viewersMessage} />}
          {<SessionInputForms handleCheckInClick={this.handleCheckInClick.bind(this)} formattedCheckIn={this.state.days[this.state.sessionCheckIn].CheckInOutFormatted} handleCheckOutClick={this.handleCheckOutClick.bind(this)} formattedCheckOut={this.state.days[this.state.sessionCheckOut].CheckInOutFormatted} rooms={this.state.sessionRooms} adults={this.state.sessionAdults} children={this.state.sessionChildren} handleGuestInfoClick={this.handleGuestInfoUpdateClick.bind(this)} />}
          <div style={{height: '8px'}}></div>
          {<HotelPromo deal={this.state.deal} />}
          {<BigPriceQuote />}
          {<BigPriceQuote />}
          {<BigPriceQuote />}
        </BookingWidget>
      </div>
    )
  }
}

export default Booking;




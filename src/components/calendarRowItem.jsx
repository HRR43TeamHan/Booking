import React from 'react';

function CalendarRowItem(props) {


  return(<th onClick={(e)=>(props.handleCalendarRowItemClick(props.item, e))}>{props.days[props.item].dayOfMonth}</th>)



}

export default CalendarRowItem;
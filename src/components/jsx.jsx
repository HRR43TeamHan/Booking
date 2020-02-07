
            <div id="smallQuotes" style={{ "marginTop": 3, "marginBottom": 15 }}>

              <div id="siteQuotes" style={{ "width": 375, "height": 500 }}>
                <div style={{ "marginBottom": 1 }}>

                  <div style={{ "display": "inline-block", "width": 168, "textAlign": "left", "fontSize": 13, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#4A4A4A", "marginLeft": 14, "marginRight": 20, "float": "left" }}>
                    <div style={{ "display": "inline-block", "float": "left", "width": 100 }}>{this.state.prices[3].name}</div>
                    <div style={{ "display": "inline-block", "fontSize": 11, "textAlign": "center", "width": 15 }}><i class="fas fa-external-link-alt"></i></div>
                    <div style={{ "display": "inline-block", "textOverflow": "ellipsis", "width": 20 }}><span>......</span></div>
                    <div style={{ "display": "inline-block", "float": "right", "fontWeight": 700, "width": 30 }}>${this.state.prices[3].price}</div>
                  </div>


                  <div style={{ "display": "inline-block", "width": 168, "textAlign": "left", "fontSize": 13, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#4A4A4A" }}>
                    <div style={{ "display": "inline-block", "float": "left", "width": 80 }}>{this.state.prices[4].name}</div>
                    <div style={{ "display": "inline-block", "fontSize": 11, "textAlign": "center", "width": 25 }}><i class="fas fa-external-link-alt"></i></div>
                    <div style={{ "display": "inline-block", "marginRight": 2, "textOverflow": "ellipsis" }}><span>.....</span></div>
                    <div style={{ "display": "inline-block", "float": "right", "fontWeight": 700, "width": 40 }}>${this.state.prices[4].price}</div>
                  </div>
                </div>


                <div style={{ "marginBottom": 15 }}>
                  <div style={{ "display": "inline-block", "width": 168, "textAlign": "left", "fontSize": 13, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#4A4A4A", "marginLeft": 14, "marginRight": 20, "float": "left" }}>
                    <div style={{ "display": "inline-block", "float": "left", "width": 100 }}>{this.state.prices[5].name}</div>
                    <div style={{ "display": "inline-block", "fontSize": 11, "textAlign": "center", "width": 15 }}><i class="fas fa-external-link-alt"></i></div>
                    <div style={{ "display": "inline-block", "textOverflow": "ellipsis", "width": 20 }}><span>......</span></div>
                    <div style={{ "display": "inline-block", "float": "right", "fontWeight": 700, "width": 30 }}>${this.state.prices[5].price}</div>
                  </div>



                  <div style={{ "display": "inline-block", "width": 168, "textAlign": "left", "fontSize": 13, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#4A4A4A", "float": "right" }}>
                    <div style={{ "display": "inline-block", "textAlign": "right", "fontWeight": 700 }}><span>View all 20 deals</span><i class="fas fa-caret-down"></i></div>
                  </div>
                </div>





                <div id="disclaimer" style={{ "marginTop": 8, "marginBottom": 12 }}>
                  <div id="disclaimerText" style={{ "float:": "bottom", "fontSize": 13, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#767676" }}>Prices are the average nightly price provided by our partner...</div>
                </div>
              </div>
            </div>
          </div>
















        <div style={{ display: "inline-block", "width": 100 }}></div>


        {this.state.areCheckInCalendarsActive ?
          <div id="checkInCalendars" style={{ position: "absolute", left: 220, "display": "inline-block", "backgroundColor": "white", "height": 419, "width": 545, "marginRight": 30, "boxShadow": "0 0 1px 0px rgba(0, 0, 0, 0.4)", borderRadius: 2}}>
            <div id="header" style={{ "display": "block", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#000a12", "fontWeight": 700, "fontSize": "16px", "textAlign": "center", "marginRight": "15px", "marginLeft": "15px", "borderBottom": "1px solid #e5e5e5", "paddingTop": 15, "paddingBottom": 0 }}>
              <div style={{ "color": "#000A12" }}>Select a date to continue</div>
              <div>
                <div style={{ "display": "inline-block", "height": 10, "width": 10, "borderRadius": 2, "backgroundColor": "#fc0", "marginRight": 4 }}></div>
                <div style={{ "display": "inline-block", "paddingTop": 4, paddingBottom: 4, "color": "#4A4A4A", "fontSize": 14 }}>Lowest priced dates</div>
              </div>
            </div>
            <div id="months">
              <div id="LeftMonth" style={{ "display": "inline-block", "width": 240, "height": 287, "marginTop": 12, "marginBottom": 12, "paddingRight": 16, "paddingLeft": 16, "whiteSpace": "nowrap", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#2c2c2c", borderRight: "1px solid #e5e5e5" }}>
                <div id="leftMonthHeaderAndNav" style={{ "display": "inline-block", "width": 240, "height": 38, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", 'textAlign': "center", "fontSize": 16, "fontWeight": 700, "paddingTop": 5, "paddingBottom": 5, "paddingRight": 7, "paddingLeft": 7 }}>
                  <div style={{ display: "inline-block" }}>{this.state.months[this.state.leftMonthIndex].month}</div>
                  <div style={{ display: "inline-block", float: "left" }} onClick={(e) => { this.handleCalendarToggleMonthLeft(e) }}><i class="fas fa-chevron-left"></i></div>
                </div>
                <Calendar rows={this.state.months[this.state.leftMonthIndex]} days={this.state.days} handleCalendarRowItemClick={this.handleCalendarRowItemClick.bind(this)} />
              </div>
              <div id="rightMonth" style={{ "display": "inline-block", "width": 240, "height": 287, "marginTop": 12, "marginBottom": 12, "paddingRight": 16, "paddingLeft": 16, "whiteSpace": "nowrap", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#2c2c2c" }}>
                <div id="rightMonthHeaderAndNav" style={{ "display": "inline-block", "width": 240, "height": 38, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", 'textAlign': "center", "fontSize": 16, "fontWeight": 700, "paddingTop": 5, "paddingBottom": 5, "paddingRight": 7, "paddingLeft": 7 }}>
                  <div style={{ display: "inline-block" }}>{this.state.months[this.state.rightMonthIndex].month}</div>
                  <div style={{ display: "inline-block", float: "right" }} onClick={(e) => { this.handleCalendarToggleMonthRight(e) }}><i class="fas fa-chevron-right"></i></div>
                </div>
                <Calendar rows={this.state.months[this.state.rightMonthIndex]} days={this.state.days} handleCalendarRowItemClick={this.handleCalendarRowItemClick.bind(this)} />
              </div>




            </div>
            {/* <div style={{ "borderBottom": "1px solid #e5e5e5", "width": 523,"paddingRight": 16, "paddingLeft": 16, "textAlign":"center"}}></div> */}
            <div id="averagePrices" style={{ "display": "block", "width": 510, "height": 20, "marginRight": 16, "marginLeft": 16, "paddingTop": 12, "paddingBottom": 15, "borderTop": "1px solid #e5e5e5" }}>
              <span style={{ "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#2c2c2c", "fontSize": 13 }}>Average daily rates: ${this.state.prices[0].price} - ${this.state.prices[19].price}</span>
            </div>
            <div id="triangle" style={{position:"absolute", left:-10, top: 73, transform:"rotate(45deg)", height: 18, width:18, backgroundColor:"white", borderBottom: "1px solid #e5e5e5", borderLeft:"1px solid #e5e5e5"}}>
            </div>
          </div> : ''}

        {this.state.areCheckOutCalendarsActive ?
          <div id="checkInCalendars" style={{ position: "absolute", left: 407, "display": "inline-block", "backgroundColor": "white", "height": 419, "width": 545, "marginRight": 30, "boxShadow": "0 0 1px 0px rgba(0, 0, 0, 0.4)", borderRadius: 2}}>
            <div id="header" style={{ "display": "block", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#000a12", "fontWeight": 700, "fontSize": "16px", "textAlign": "center", "marginRight": "15px", "marginLeft": "15px", "borderBottom": "1px solid #e5e5e5", "paddingTop": 15, "paddingBottom": 0 }}>
              <div style={{ "color": "#000A12" }}>Select a date to continue</div>
              <div>
                <div style={{ "display": "inline-block", "height": 10, "width": 10, "borderRadius": 2, "backgroundColor": "#fc0", "marginRight": 4 }}></div>
                <div style={{ "display": "inline-block", "paddingTop": 4, paddingBottom: 4, "color": "#4A4A4A", "fontSize": 14 }}>Lowest priced dates</div>
              </div>
            </div>
            <div id="months">
              <div id="LeftMonth" style={{ "display": "inline-block", "width": 240, "height": 287, "marginTop": 12, "marginBottom": 12, "paddingRight": 16, "paddingLeft": 16, "whiteSpace": "nowrap", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#2c2c2c", borderRight: "1px solid #e5e5e5" }}>
                <div id="leftMonthHeaderAndNav" style={{ "display": "inline-block", "width": 240, "height": 38, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", 'textAlign': "center", "fontSize": 16, "fontWeight": 700, "paddingTop": 5, "paddingBottom": 5, "paddingRight": 7, "paddingLeft": 7 }}>
                  <div style={{ display: "inline-block" }}>{this.state.months[this.state.leftMonthIndex].month}</div>
                  <div style={{ display: "inline-block", float: "left" }} onClick={(e) => { this.handleCalendarToggleMonthLeft(e) }}><i class="fas fa-chevron-left"></i></div>
                </div>
                <Calendar rows={this.state.months[this.state.leftMonthIndex]} days={this.state.days} handleCalendarRowItemClick={this.handleCalendarRowItemClick.bind(this)} />
              </div>
              <div id="rightMonth" style={{ "display": "inline-block", "width": 240, "height": 287, "marginTop": 12, "marginBottom": 12, "paddingRight": 16, "paddingLeft": 16, "whiteSpace": "nowrap", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#2c2c2c" }}>
                <div id="rightMonthHeaderAndNav" style={{ "display": "inline-block", "width": 240, "height": 38, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", 'textAlign': "center", "fontSize": 16, "fontWeight": 700, "paddingTop": 5, "paddingBottom": 5, "paddingRight": 7, "paddingLeft": 7 }}>
                  <div style={{ display: "inline-block" }}>{this.state.months[this.state.rightMonthIndex].month}</div>
                  <div style={{ display: "inline-block", float: "right" }} onClick={(e) => { this.handleCalendarToggleMonthRight(e) }}><i class="fas fa-chevron-right"></i></div>
                </div>
                <Calendar rows={this.state.months[this.state.rightMonthIndex]} days={this.state.days} handleCalendarRowItemClick={this.handleCalendarRowItemClick.bind(this)} />
              </div>




            </div>
            {/* <div style={{ "borderBottom": "1px solid #e5e5e5", "width": 523,"paddingRight": 16, "paddingLeft": 16, "textAlign":"center"}}></div> */}
            <div id="averagePrices" style={{ "display": "block", "width": 510, "height": 20, "marginRight": 16, "marginLeft": 16, "paddingTop": 12, "paddingBottom": 15, "borderTop": "1px solid #e5e5e5" }}>
              <span style={{ "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#2c2c2c", "fontSize": 13 }}>Average daily rates: ${this.state.prices[0].price} - ${this.state.prices[19].price}</span>
            </div>
            <div id="triangle" style={{position:"absolute", left:-10, top: 73, transform:"rotate(45deg)", height: 18, width:18, backgroundColor:"white", borderBottom: "1px solid #e5e5e5", borderLeft:"1px solid #e5e5e5"}}>
            </div>
          </div> : ''}












        {this.state.isGuestInformationActive ? <div id="guestInfo" style={{ position: "absolute", left: 407, top: 40, "backgroundColor": "white", "height": 230, "width": 288, paddingTop: 16, paddingBottom: 16, paddingRight: 16, paddingLeft: 16, "boxShadow": "0 0 1px 0px rgba(0, 0, 0, 0.4)", borderRadius: 2}}>

          <div id="closeGuestInfo" style={{ float: "right", color: "#00a680", fontSize: 20, cursor: "pointer" }} onClick={(e) => { this.handleGuestInfoClose(e) }}>< i class="fas fa-times"></i></div>

          <div id="rooms" style={{ display: "inline-block", height: 36, width: 288, color: "#2C2C2C", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", fontWeight: 700, paddingTop: 16, fontSize: ".95em" }}>
            <div style={{ display: "inline-block", marginTop: 12 }}>
              <span><i class="fas fa-bed"></i></span><span style={{ "marginLeft": 5 }}>Rooms</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", float: "right" }}>
              <div style={{ display: "flex", width: 36, height: 36, color: "#00A680", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", cursor: "pointer" }} onClick={(e) => { this.handleToggleDownGuestInfoCategory('sessionRooms', e) }}><i class="fas fa-minus"></i></div>
              <div style={{ display: "flex", width: 58, height: 36, color: "#2C2c2C", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", fontWeight: 400, boxShadow: "inset 0 3px 3px -3px rgba(0,0,0,.25)" }}>{this.state.sessionRooms}</div>
              <div style={{ display: "flex", width: 36, height: 36, color: "#00A680", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", cursor: "pointer" }} onClick={(e) => { this.handleToggleUpGuestInfoCategory('sessionRooms', e) }}><i class="fas fa-plus"></i></div>
            </div>
          </div>





          <div id="adults" style={{ display: "inline-block", height: 36, width: 288, color: "#2C2C2C", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", fontWeight: 700, paddingTop: 16, fontSize: ".95em" }}>
            <div style={{ display: "inline-block", marginTop: 12 }}>
              <span><i class="fas fa-bed"></i></span><span style={{ "marginLeft": 5 }}>Adults</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", float: "right" }}>
              <div style={{ display: "flex", width: 36, height: 36, color: "#00A680", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", cursor: "pointer" }} onClick={(e) => { this.handleToggleDownGuestInfoCategory('sessionAdults', e) }}><i class="fas fa-minus"></i></div>
              <div style={{ display: "flex", width: 58, height: 36, color: "#2C2c2C", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", fontWeight: 400, boxShadow: "inset 0 3px 3px -3px rgba(0,0,0,.25)" }}>{this.state.sessionAdults}</div>
              <div style={{ display: "flex", width: 36, height: 36, color: "#00A680", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", cursor: "pointer" }} onClick={(e) => { this.handleToggleUpGuestInfoCategory('sessionAdults', e) }}><i class="fas fa-plus"></i></div>
            </div>
          </div>






          <div id="children" style={{ display: "inline-block", height: 36, width: 288, color: "#2C2C2C", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", fontWeight: 700, paddingTop: 16, fontSize: ".95em" }}>
            <div style={{ display: "inline-block", marginTop: 12 }}>
              <span><i class="fas fa-bed"></i></span><span style={{ "marginLeft": 5 }}>Children</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", float: "right" }}>
              <div style={{ display: "flex", width: 36, height: 36, color: "#00A680", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", cursor: "pointer" }} onClick={(e) => { this.handleToggleDownGuestInfoCategory('sessionChildren', e) }}><i class="fas fa-minus"></i></div>
              <div style={{ display: "flex", width: 58, height: 36, color: "#2C2c2C", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", fontWeight: 400, boxShadow: "inset 0 3px 3px -3px rgba(0,0,0,.25)" }}>{this.state.sessionChildren}</div>
              <div style={{ display: "flex", width: 36, height: 36, color: "#00A680", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", cursor: "pointer" }} onClick={(e) => { this.handleToggleUpGuestInfoCategory('sessionChildren', e) }}><i class="fas fa-plus"></i></div>
            </div>
          </div>
          <div style={{ paddingTop: 16 }}>
            <button id="update" style={{ borderColor: "#078171", width: 288, height: 36, backgroundColor: "#078171", color: "#fff", fontFamily: "Arial,Tahoma,Bitstream Vera Sans,sans-serif", border: "1px solid transparent", borderRadius: 3, fontSize: ".95em", textAlign: "center", cursor: "pointer", fontWeight: 700 }} onClick={(e) => {this.handleGuestInfoUpdateClick(e)}}>Update</button>
          </div>
          <div id="triangle" style={{position:"absolute", left:-10, top: 95, transform:"rotate(45deg)", height: 18, width:18, backgroundColor:"white", borderBottom: "1px solid #e5e5e5", borderLeft:"1px solid #e5e5e5"}}>
            </div>
        </div> : ''}




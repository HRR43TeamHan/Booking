const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'booking'
});

connection.connect();

// get a hotel's record
const getTargetHotelInfo = (id, callback) => {
  connection.query(`SELECT * FROM hotels WHERE id=${id}`, (error, results) => {
    if (error) callback(error, null);
    callback(null,results);
  })
}

// get date_premiums for each day of the proposed stay
const getDatePremiumsForStay = (hotel, checkIn, checkOut, callback) => {
  connection.query(`SELECT * FROM dates WHERE id>=${checkIn} AND id<=${checkOut}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null,results);
    }
  })
}

// get all the site records
const getSites = (hotel, averageDatePremium, callback) => {
  connection.query(`SELECT * FROM sites`, (error, results) => {
    if (error) callback(error, null);
    callback(null,results);
  })
}

module.exports = {
  connection,
  getTargetHotelInfo,
  getDatePremiumsForStay,
  getSites
}

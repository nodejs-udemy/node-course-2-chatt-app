const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(someTimestamp);
date.locale('de');
console.log(date.format('HH:mm Do MMM YYYY'));

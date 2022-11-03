const mongoose = require(`mongoose`);
const time_schema = new mongoose.Schema({
  name: String,
  contYears: Number,
  years: Number,
  months: Number,
  days: Number,
  hours: Number,
  minutes: Number,
  seconds: Number,  
});

const Time = mongoose.model("times", time_schema);

module.exports = Time;

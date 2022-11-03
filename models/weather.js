const mongoose = require(`mongoose`);
const weather_schema = new mongoose.Schema({
  name: String,
  description: String,
  debuff_maneuver: Number,
  debuff_morale: Number,
  debuff_enthusiasm: Number,
  debuff_tactics: Number,
  debuff_supplies: Number,
  debuff_spy_network: Number,
  debuff_dice: Number,
});

const Weather = mongoose.model("weathers", weather_schema);

module.exports = Weather;

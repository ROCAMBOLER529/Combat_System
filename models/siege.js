const mongoose = require(`mongoose`);
const battle_schema = new mongoose.Schema({
  type: String, // army, navy or airforce
  // category: String,
  width: Number,
  fortress_level: Number,  
});

const Battle = mongoose.model("weathers", battle_schema);

module.exports = Battle;

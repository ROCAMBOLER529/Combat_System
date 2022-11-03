const mongoose = require(`mongoose`);
const combat_schema = new mongoose.Schema({
  type: String, // army, navy or airforce
  // category: String,
  width: Number,
  
});

const Combat = mongoose.model("weathers", combat_schema);

module.exports = Combat;

const mongoose = require(`mongoose`);
const leader_schema = new mongoose.Schema({
  name: String,
  damange: Number,
  hp: Number,
  id_leader: mongoose.Schema.Types.ObjectId,
  age: Number,
  tech: Number,
  morale: Number,
  discipline: Number,
  enthusiasm: Number,
  charisma: Number  
});

const Leader = mongoose.model("leaders", leader_schema);

module.exports = Leader;

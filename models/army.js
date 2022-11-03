const mongoose = require(`mongoose`);
const army_schema = new mongoose.Schema({
  name: String,
  cont: Number,
  damange: Number,
  id_leader: mongoose.Schema.Types.ObjectId,
  tech: Number,
  morale: Number,
  discipline: Number,
  exhaustion: Number,
  // tactics: Number,
  spy_network: Number,
  supplies: Number,
  siege_ability: Number,
});

const Army = mongoose.model("armies", army_schema);

module.exports = Army;

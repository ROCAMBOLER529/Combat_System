const mongoose = require(`mongoose`);
const terrain_schema = new mongoose.Schema({
  name: String,
  description: String,
  debuff_maneuver: Number,
  debuff_morale: Number,
  debuff_enthusiasm: Number,
  debuff_tactics: Number,
  debuff_supplies: Number,
  debuff_spy_network: Number,
  debuff_dice: Number, // river crossing, amphibious, etc.
  buff_fortress: Number, // natural defenses
});

const Terrain = mongoose.model("terrains", terrain_schema);

module.exports = Terrain;

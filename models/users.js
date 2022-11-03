const mongoose = require(`mongoose`);
const user_schema = new mongoose.Schema({
  nickname: String,
  mail: String,
  password: String
});

const User = mongoose.model("weathers", user_schema);

module.exports = User;

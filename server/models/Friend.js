const mongoose = require("./index.js")

const Schema = mongoose.Schema;
const friendSchema = new Schema({
  name: String,
  image: String,
  id: String
})

const Friend = mongoose.model("Friend", friendSchema)

module.exports = Friend;

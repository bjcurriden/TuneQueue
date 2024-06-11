const mongoose = require("./index.js")
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: String,
  img: String,
  owner: String,
})

const Playlist = mongoose.model("Playlist", playlistSchema)

module.exports = Playlist

import { Mongoose, Document, Model, Schema } from 'mongoose';
const mongoose: Mongoose = require('./index.js');

const schema = mongoose.Schema;

export interface IPlaylist extends Document {
  name: String,
  img: String,
  owner: String,
}

const playlistSchema: Schema<IPlaylist> = new schema({
  name: String,
  img: String,
  owner: String,
})

export const Playlist: Model<IPlaylist> = mongoose.model("Playlist", playlistSchema)



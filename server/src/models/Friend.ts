import { Mongoose, Document, Model, Schema } from 'mongoose';
const mongoose: Mongoose = require('./index.js');

const schema = mongoose.Schema;

export interface IFriend extends Document {
  name: String,
  image: String,
  id: String
};

const friendSchema: Schema<IFriend> = new schema({
  name: String,
  image: String,
  id: String
})

export const Friend: Model<IFriend> = mongoose.model("Friend", friendSchema)

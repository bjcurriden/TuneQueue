import mongoose from 'mongoose';

(async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/queue');
    console.log('🐸 Connected to Mongoose 🐸');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("unknown error: ", error);
    }
  }
})()

export { mongoose };
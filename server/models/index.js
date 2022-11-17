const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(
      `mongodb://localhost:27017/queue`,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log('🐸 Connected to Mongoose 🐸');
      }
    );
  } catch (error) {
    console.log(error.message);
  }
}
main();

module.exports = mongoose;
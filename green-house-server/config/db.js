const mongoose = require("mongoose");

const InitiateMongoServer = async (uri) => {
  try {
    console.log(uri)
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;

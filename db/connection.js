
const mongoose = require("mongoose");
const connectDB = (url) => {
    console.log("Connected to DB");
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });    
}

module.exports = {connectDB};
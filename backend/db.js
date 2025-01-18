const mongoose = require('mongoose');
const dotenv= require("dotenv")


dotenv.config();

const connectdb= async()=> {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected");
    
  } catch (error) {
    console.log(error, "something occured");
    
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports= connectdb
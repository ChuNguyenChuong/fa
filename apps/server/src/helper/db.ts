// const mongoose = require("mongoose");
import mongoose from "mongoose";

async function ConnectMongoose() {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(err));
}

export {
  ConnectMongoose
}

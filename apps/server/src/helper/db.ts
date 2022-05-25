// const mongoose = require("mongoose");
import mongoose, { ConnectOptions } from "mongoose";

async function ConnectMongoose() {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(err));
}

export {
  ConnectMongoose
}

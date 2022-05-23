// const mongoose = require("mongoose");
import * as mongoose from "mongoose";

async function Connect() {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(err));
}

module.exports = { Connect }
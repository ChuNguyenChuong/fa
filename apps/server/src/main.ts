/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import dotenv from "dotenv";
import express from "express"
import morgan from 'morgan';
import expressSession from "express-session";
import cors from "cors";
import { ConnectMongoose } from "../src/helper/db";
import timeOut from "connect-timeout"
dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
ConnectMongoose()

app.use(timeOut(120000));
app.use(morgan("dev"));
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  secret: process.env.SECRET_SESSION || "SECRET_SESSION",
  resave: false,
  saveUninitialized: true
}));
app.use(function (req, res, next) {
  res.setTimeout(120000, function () {
    console.log('Request has timed out.');
    res.send(408);
  });

  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: `${process.env.CLIENT_URL}`,
    })
  );
}

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

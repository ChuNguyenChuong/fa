/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
require("dotenv").config();
import * as express from 'express';
import * as morgan from 'morgan';
import * as expressSession from "express-session";
import * as cors from "cors";

const db = require('./helpers/db');

const app = express();

db.Connect();

app.use(morgan("dev"));
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  secret: process.env.SECRET_SESSION || "SECRET_SESSION",
  resave: false,
  saveUninitialized: true
}))

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

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import dotenv from "dotenv";
import express from "express"
import morgan from 'morgan';
import expressSession from "express-session";
import cors from "cors";
import { ConnectMongoose } from "../src/helper/db"
dotenv.config();
const app = express();
ConnectMongoose()

app.use(morgan("dev"));
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  secret: process.env.SECRET_SESSION || "SECRET_SESSION",
  resave: false,
  saveUninitialized: true
}));

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

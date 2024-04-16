import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";
import createConnection from "./database/connection.js";

const PORT = process.env.PORT || "8080";
const mongoURL = process.env.MONGO_URL;
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = createServer(app);
const db = await createConnection(mongoURL)
server.listen(PORT);

server.on("listening", () => {
  console.log(`Server is listening at port ${PORT}`);
});

server.on("error", () => console.log(`Server is not listening`));

import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";

const PORT = process.env.PORT || "8081";
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = createServer(app);
server.listen(PORT);

server.on("listening", () => {
  console.log(`Server is listening at port ${PORT}`);
});

server.on("error", () => console.log(`Server is not listening`));

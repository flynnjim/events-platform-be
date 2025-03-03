import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

import { getUsers } from "./controllers/index.controllers";

app.get("/api/users", getUsers);

app.all("*", (request, response) => {
  response
    .status(404)
    .send({ msg: "Sorry, the endpoint you are searching for does not exist." });
});

export default app;

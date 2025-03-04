import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

import {
  getUsers,
  getSingleUser,
  getAllEvents,
} from "./controllers/index.controllers";
import { errorHandler } from "./middlewares/error-handler.middlewares";

app.get("/api/users", getUsers);

app.get("/api/users/:user_id", getSingleUser);

app.get("/api/events", getAllEvents);

app.all("*", (request, response) => {
  response
    .status(404)
    .send({ msg: "Sorry, the endpoint you are searching for does not exist." });
});

app.use(errorHandler);

export default app;

import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

import {
  getUsers,
  getSingleUser,
  getAllEvents,
  getSingleEvent,
  getRegisteredUsers,
  getAllStaff,
  getSingleStaff,
  postEvent,
  patchEvent,
  postRegistration,
  patchRegistration,
  getDocumentation,
} from "./controllers/index.controllers";
import { errorHandler } from "./middlewares/error-handler.middlewares";

app.get("/api/users", getUsers);

app.get("/api/users/:user_id", getSingleUser);

app.get("/api/events", getAllEvents);

app.get("/api/events/:event_id", getSingleEvent);

app.get("/api/users/registered/:event_id", getRegisteredUsers);

app.get("/api/staff", getAllStaff);

app.get("/api/staff/:staff_id", getSingleStaff);

app.post("/api/events/:created_by", postEvent);

app.patch("/api/events", patchEvent);

app.post("/api/registration", postRegistration);

app.patch("/api/registration", patchRegistration);

app.get("/api", getDocumentation);

app.all("*", (request, response) => {
  response
    .status(404)
    .send({ msg: "Sorry, the endpoint you are searching for does not exist." });
});

app.use(errorHandler);

export default app;

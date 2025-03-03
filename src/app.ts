import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

import { getUsers } from "./controllers/index.controllers";

app.get("/api/users", getUsers);

export default app;

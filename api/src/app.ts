import express, { Application } from "express";
import router from "./router";
import cors from "cors";

export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(router);

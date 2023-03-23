import express, { Express } from "express";
import bodyParser from "body-parser";
import { API } from "../handler/api";
import { config } from "../config/config";

export const app: Express = express();

app.use(bodyParser.json()); // for parsing application/json content-type header

const router = express.Router();

new API(router, config.target, config.replaced);
app.use("/api", router);

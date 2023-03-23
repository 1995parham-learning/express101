import express, { Express } from "express";
import bodyParser from "body-parser";
import { API } from "./src/handler/api";
import { config } from "./src/config/config";

const app: Express = express();

app.use(bodyParser.json()); // for parsing application/json content-type header

const router = express.Router();

new API(router, config.target, config.replaced);
app.use("/api", router);

app.listen(config.port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  );
});

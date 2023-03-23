import { config } from "./src/config/config";
import { app } from "./src/app/app";

app.listen(config.port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  );
});

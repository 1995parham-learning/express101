import { config } from "./src/config/config";
import { app } from "./src/app/app";
import { availableParallelism } from "node:os";
import cluster from "node:cluster";
import process from "node:process";

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < Math.min(numCPUs, 4); i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died with ${signal} (${code})`);
  });
} else {
  app.listen(config.port, () => {
    console.log(
      `⚡️[server]: Server is running at http://localhost:${config.port}`
    );
  });

  console.log(`Worker ${process.pid} started`);
}

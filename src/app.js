import Fastify from "fastify";
import Route from "./route.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import AutoLoad from "fastify-autoload";
const fastify = Fastify({ logger: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async (fastify, opts) => {
  fastify.register(import("../src/plugins/index.js"));
  fastify.register(AutoLoad, {
    dir: join(__dirname, "Routes"),
  });

  fastify.register(Route);

  const PORT = 3000;

  // fastify.get("/", async (req, reply) => {
  //   return "Hello World!";
  // });

  fastify.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};

//start();

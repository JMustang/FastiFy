export default async (fastify, opts) => {
  fastify.get("/", async (req, reply) => {
    return "Hello from Routes Page!";
  });
};

export default async (fastify, opts) => {
  const genres = fastify.music();
  fastify.get("/", async (req, reply) => {
    return genres;
  });
};

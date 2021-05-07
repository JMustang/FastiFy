/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 */

export default async (fastify, opts) => {
  fastify.get("/junior", async (req, reply) => {
    reply.code(200).send("Got to junior Route");
  });
};

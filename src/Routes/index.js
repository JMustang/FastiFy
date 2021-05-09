export default async (fastify, opts) => {
  const genres = fastify.music();
  fastify.get("/", async (req, reply) => {
    return genres;
  });

  fastify.get("/:id", async (req, reply) => {
    try {
      const genre = genres.find((genre) => genre.id === +req.params.id);
      return genre;
    } catch (error) {
      reply.code(404).send("NOT THERE!" + error);
    }
  });

  fastify.post("/", async function (req, reply) {
    const { genre } = req.body;
    if (!genre) {
      reply.code(404).send("NOT FOUND!");
    }
    const listOfGenres = fastify.music(genre);
    return listOfGenres;
  });
};

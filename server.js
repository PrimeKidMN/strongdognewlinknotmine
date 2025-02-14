import Fastify from "fastify";
import pg from "pg";

const fastify = Fastify({ logger: true });

// PostgreSQL Database Connection
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL, // Set this in Koyeb's Environment Variables
});

// Example Route
fastify.get("/api/data", async (request, reply) => {
  const result = await pool.query("SELECT * FROM your_table");
  reply.send(result.rows);
});

// Start Server
fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});

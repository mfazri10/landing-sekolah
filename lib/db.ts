import { Pool, PoolConfig } from 'pg'

// Prefer a single connection string if provided. On Vercel with Vercel Postgres,
// use POSTGRES_URL_NON_POOLING to avoid double pooling with the `pg` client.
const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    undefined

// Enable SSL in production by default (many cloud Postgres require it)
// You can force it via PGSSL=true in any environment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool
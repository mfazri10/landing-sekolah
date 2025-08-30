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
const sslRequired =
    (process.env.PGSSL?.toLowerCase() === 'true') ||
    process.env.NODE_ENV === 'production'

const config: PoolConfig = connectionString
    ? {
            connectionString,
            ssl: sslRequired ? { rejectUnauthorized: false } : false,
        }
    : {
            host: process.env.PGHOST || process.env.POSTGRES_HOST || 'localhost',
            user: process.env.PGUSER || process.env.POSTGRES_USER || 'postgres',
            password:
                process.env.PGPASSWORD || process.env.POSTGRES_PASSWORD || '12345678',
            database:
                process.env.PGDATABASE || process.env.POSTGRES_DB || 'landing-sekolah',
            port: Number(process.env.PGPORT || process.env.POSTGRES_PORT || 5432),
            ssl: sslRequired ? { rejectUnauthorized: false } : false,
        }

// Reuse a single pool instance in dev and on serverless warm instances
const globalForPool = globalThis as unknown as { pgPool?: Pool }

export const pool: Pool = globalForPool.pgPool ?? new Pool(config)
if (!globalForPool.pgPool) globalForPool.pgPool = pool

export default pool
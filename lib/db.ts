import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'landing-sekolah',
    password: '12345678',
    port: 5432,
});

export default pool;
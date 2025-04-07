import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',   
  host: 'localhost',
  database: 'employees', 
  password: 'P@ssword1',
  port: 5433,
});

export default pool; 
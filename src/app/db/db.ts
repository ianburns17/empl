import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',   
  host: 'localhost',
  database: 'employees', 
  password: 'P@ssword1',
  port: 5432,
});

export default pool;  // Export the pool to be used in other parts of the application
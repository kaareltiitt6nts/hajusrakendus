import { createPool } from "mariadb";
import "dotenv/config";

const db = createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

async function testConnection() {
  try {
    const conn = await db.getConnection();
    console.log(`Connected to database ${process.env.DB_DATABASE}`);
    conn.release();
  } catch (err) {
    console.log("DB connection failed", err);
  }
}

testConnection();

export default db;

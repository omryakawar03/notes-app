import mysql from "mysql2/promise";

let conn: any = null;

export async function getDB() {
  if (!conn) {
    conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
  }
  return conn;
}

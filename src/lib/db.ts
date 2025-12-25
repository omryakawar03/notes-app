import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'notesdb',
})
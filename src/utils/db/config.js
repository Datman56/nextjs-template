import mysql from 'mysql2/promise';

// Create the connection to db
export const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_PASSWORD,
});

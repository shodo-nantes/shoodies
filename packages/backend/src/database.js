const postgres = require('postgres');

const sql = postgres({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
});

module.exports = sql;

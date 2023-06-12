require("dotenv").config();
const {Client} = require("pg");
const client = new Client({
    host: 'localhost',
    user : 'postgres',
    port: '5432',
    password: 'G5m1i128',
    database: 'Chess'
});
module.exports = client;

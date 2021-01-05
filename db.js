const Pool = require('pg').Pool

const pool = new Pool({
    host: process.env.host,
    port: process.env.db_port,
    password: process.env.password,
    database:process.env.database,
    user: process.env.user
})

module.exports = pool

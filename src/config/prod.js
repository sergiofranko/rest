module.exports = {
    postgres: {
        host: process.env.HOST_DB,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT_DB,
        ssl: true
    }
}
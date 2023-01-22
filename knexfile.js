module.exports = {
    client: "mysql2",
    connection: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "password",
        database: "api-node"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}
module.exports = {
    client: "mysql2",
    connection: {
        host: "containers-us-west-154.railway.app",
        port: "6046",
        user: "root",
        password: "ta1u2XLWH1niUipvOMJo",
        database: "railway"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}
import sql from "mssql";

const config = {
    user: 'sa',
    password: '1234321',
    server: 'localhost',
    port: 1433,
    database: "Nstride_sneakers",
    options: {
        encrypt: false,
        enableArithabort: true,
        trustServerCertificate: true
    }
}

const poolPromise = new sql.ConnectionPool(config).connect()
.then(pool => {
    console.log('Connected to MSSQL');
    return pool;
})
.catch(err => console.error("Database connection faild", err));

export {sql, poolPromise};
import mysql from "mysql2";

// create connection to database
const db = mysql.createConnection({
    host: 'befoohu9xfcxz3pnpmsd-mysql.services.clever-cloud.com',
    user: 'ug51cccifwzdczr5',
    password: 'EFfQfLju1X0PfY26S1Pm',
    database: 'befoohu9xfcxz3pnpmsd'
});

export default db;
const mysql=require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "flowers",
});

connection.connect((error) => {
    if (error){
        console.error("Error al conectar la BD", error);
    }
});

module.exports = connection;
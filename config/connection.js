// Connection / access mySQL database
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "NewPassword",
    database: "burgers_db"
})

connection.connect(function(err){
    if(err)throw err;
    console.log("You're connected!");
});

// Export connection
module.exports = connection;
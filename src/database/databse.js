import mysql from "promise-mysql";
import config from "./../config";


// const connection = mysql.createConnection({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password
// });


const connection = mysql.createConnection({
    host: 'localhost',
    database: 'restapinode',
    user: 'root',
    password: 'root'
});


const getConnection = () =>{
    return connection;
};

module.exports = {
    getConnection
};

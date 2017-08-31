var config=require("../config.js");
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    config.localhost.database,
    config.localhost.username,
    config.localhost.password,
    {
        host: config.localhost.host,
        dialect: config.localhost.dialect,
        port:config.localhost.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);

var temp=sequelize.define("temp",
    {
        id:{type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
        url:{type : Sequelize.TEXT}
    },
    {
        tableName: 'temp'
    }
);
//temp.sync().then(function () {
//
//});
module.exports=temp;
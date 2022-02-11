const path = require('path');
if (!global.hasOwnProperty("models")) {
    var Sequelize = require("sequelize"),
        sequelize = null;
    // 
    const dburl = process.env.DATABASE_URL || 'postgres://gevtakcvdenuph:b425094eab77997854488df68a02013e54ee701b829f02bfa7686a309ed01f1b@ec2-3-219-204-29.compute-1.amazonaws.com:5432/d8ib827prmem6s'

    sequelize = new Sequelize(dburl, {
        ssl: true,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    });

    global.models = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        User: require(path.join(__dirname, 'user'))(sequelize, Sequelize.DataTypes),
        Item: require(path.join(__dirname, 'item'))(sequelize, Sequelize.DataTypes),
    };
}
module.exports = global.models;

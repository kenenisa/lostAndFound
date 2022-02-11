module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Items", {
        // Model attributes are defined here
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.TEXT,
        },
        ets: {
            type: DataTypes.STRING,
        },
        founderId:{
            type: DataTypes.INTEGER,
        }
    },{paranoid:true})
}


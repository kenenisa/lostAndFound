module.exports = function (sequelize, DataTypes) {
    return sequelize.define("User", {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        tg_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.TEXT,
        }
    }, { paranoid: true })
}


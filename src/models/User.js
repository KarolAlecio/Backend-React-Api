const Sequelize = require("sequelize");
const {DataTypes}= require( "sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    firsName: {
        type: DataTypes.STRING,
        defaultValue:"",
    },
    emai: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
};

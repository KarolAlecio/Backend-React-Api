const Sequelize = require("sequelize");
const {DataTypes}= require( "sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users", {
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
    email: {
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

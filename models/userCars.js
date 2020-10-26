/**
 * Define entities userCars
 */

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const UserCars = sequelize.define('userCars', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { timestamps: true });

module.exports = UserCars;
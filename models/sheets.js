/**
 * Define sheets model
 */

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Sheets = sequelize.define('sheets', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  totalKilometers: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  compensation: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  object_journey: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { timestamps: true });

module.exports = Sheets;
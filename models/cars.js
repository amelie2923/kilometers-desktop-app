
/**
 * Define cars model
 */

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Cars = sequelize.define('cars', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  power: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  registration: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, { timestamps: true });

module.exports = Cars;
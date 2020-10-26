/**
 * Define journeys model
 */

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Journeys = sequelize.define('journeys', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  journeyStart: {
    type: DataTypes.STRING,
    allowNull: false
  },
  journeyEnd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kilometersStart: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  kilometersEnd: {
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

  //add new tables from sheets

}, { timestamps: true });

module.exports = Journeys;
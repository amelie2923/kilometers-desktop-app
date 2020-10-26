/**
 * Define objectJourneys model
 */

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const ObjectJourneys = sequelize.define('objectJourneys', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: true });

module.exports = ObjectJourneys;
/**
 * Define entities userEntities
 */

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const UserEntities = sequelize.define('userEntities', {
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
  entityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { timestamps: true });

module.exports = UserEntities;
// models/User.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class User extends Model {}

User.init({
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: sequelize.literal('uuid_generate_v4()')
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users', // Specify the table name if it's different from the model name
  timestamps: false // Set timestamps to false if you don't want createdAt and updatedAt columns
});

module.exports = User;

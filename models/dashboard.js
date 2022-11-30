'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dashboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dashboard.init({
    name: DataTypes.STRING,
    office: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    cost: DataTypes.STRING,
    date: DataTypes.STRING,
    owner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dashboard',
    tableName: 'Dashboards',
    underscored: true,
  });
  return Dashboard;
};
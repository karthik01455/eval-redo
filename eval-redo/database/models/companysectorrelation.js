'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanySectorRelations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanySectorRelations.init({
    company_id: DataTypes.STRING,
    company_sector: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanySectorRelations',
  });
  return CompanySectorRelations;
};
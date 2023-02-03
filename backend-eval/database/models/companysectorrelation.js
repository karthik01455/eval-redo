'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanySectorRelation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanySectorRelation.init({
    company_id: DataTypes.STRING,
    company_sector: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanySectorRelation',
  });
  return CompanySectorRelation;
};
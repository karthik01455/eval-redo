'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailsOfCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailsOfCompany.init({
    id: {type:DataTypes.STRING, primaryKey:true},
    name: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    ceo: DataTypes.STRING,
    numberEmployees: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailsOfCompany',
  });
  return DetailsOfCompany;
};
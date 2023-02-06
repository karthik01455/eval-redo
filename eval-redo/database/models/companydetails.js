'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CompanyDetails.hasOne(models.CompanyScores,{
          foreignKey:'id'
        })

    }
  }
  CompanyDetails.init({
    id: {type:DataTypes.STRING, primaryKey:true},
    name: DataTypes.STRING,
    description:DataTypes.TEXT,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    ceo: DataTypes.STRING,
    numberEmployees: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanyDetails',
  });
  return CompanyDetails;
};
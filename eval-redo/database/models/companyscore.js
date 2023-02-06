'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyScores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CompanyScores.belongsTo(models.CompanyDetails,
        {
          foreignKey:'id',
          onDelete:'CASCADE'
        })
    }
  }
  CompanyScores.init({
    id: {type:DataTypes.STRING, primaryKey:true},
    score: DataTypes.REAL,
    sector: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanyScores',
  });
  return CompanyScores;
};
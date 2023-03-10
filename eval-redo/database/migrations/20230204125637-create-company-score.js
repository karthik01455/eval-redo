'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompanyScores', {
    
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references:{
          model:'CompanyDetails',
          key:'id'

        }
      },
      score: {
        type: Sequelize.REAL
      },
      sector: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CompanyScores');
  }
};
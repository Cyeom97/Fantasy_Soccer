'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      currentGoals: {
        type: Sequelize.INTEGER
      },
      currentAssists: {
        type: Sequelize.INTEGER
      },
      currentCleansheet: {
        type: Sequelize.INTEGER
      },
      statGoals: {
        type: Sequelize.INTEGER
      },
      statAssists: {
        type: Sequelize.INTEGER
      },
      totalCleansheets: {
        type: Sequelize.INTEGER
      },
      teamId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('players')
  }
}

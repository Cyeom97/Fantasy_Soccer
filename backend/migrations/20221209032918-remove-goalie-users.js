'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'goalie')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'goalie', {
      type: Sequelize.INTEGER,
      references: {
        model: 'players',
        key: 'id'
      }
    })
  }
}

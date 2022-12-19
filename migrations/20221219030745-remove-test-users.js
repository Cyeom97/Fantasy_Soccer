'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('players', 'test2')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('players', 'test2', {
      type: Sequelize.INTEGER
    })
  }
}

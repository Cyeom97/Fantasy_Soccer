'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('players', 'totalPoints', {
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('players', 'totalPoints', {
      type: Sequelize.STRING
    })
  }
}

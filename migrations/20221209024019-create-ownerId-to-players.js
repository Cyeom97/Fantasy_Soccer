'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'squad', 'goalie')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('players', 'goalie', 'squad')
  }
}

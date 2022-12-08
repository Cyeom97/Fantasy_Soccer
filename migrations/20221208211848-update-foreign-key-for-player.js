'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('players', 'teamId', 'clubId')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('players', 'clubId', 'teamId')
  }
}

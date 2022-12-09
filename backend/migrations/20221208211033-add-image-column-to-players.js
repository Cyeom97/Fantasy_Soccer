'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('players', 'image', {
      type: Sequelize.TEXT
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('players', 'image')
  }
}

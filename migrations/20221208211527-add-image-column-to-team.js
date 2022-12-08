'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('teams', 'image', {
      type: Sequelize.TEXT
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('teams', 'image')
  }
}

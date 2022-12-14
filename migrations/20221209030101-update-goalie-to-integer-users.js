'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'goalie', {
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'goalie', {
      type: Sequelize.STRING
    })
  }
}

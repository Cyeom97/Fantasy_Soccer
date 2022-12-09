'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'username', 'email')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'email', 'username')
  }
}

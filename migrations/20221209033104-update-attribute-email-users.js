'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING
    })
  }
}

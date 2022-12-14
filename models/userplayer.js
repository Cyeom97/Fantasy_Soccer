'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  UserPlayer.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      playerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'players',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UserPlayer',
      tableName: 'user_players'
    }
  )
  return UserPlayer
}

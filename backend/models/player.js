'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsToMany(models.User, {
        through: models.UserPlayer,
        as: 'players',
        foreignKey: 'playerId'
      })

      Player.belongsTo(models.Team, {
        as: 'club',
        foreignKey: 'clubId'
      })
    }
  }
  Player.init(
    {
      name: DataTypes.STRING,
      position: DataTypes.STRING,
      currentGoals: DataTypes.INTEGER,
      currentAssists: DataTypes.INTEGER,
      currentCleansheet: DataTypes.INTEGER,
      statGoals: DataTypes.INTEGER,
      statAssists: DataTypes.INTEGER,
      totalCleansheets: DataTypes.INTEGER,
      clubId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      image: DataTypes.TEXT,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'players'
    }
  )
  return Player
}

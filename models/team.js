'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Team.hasMany(models.Player, {
        as: 'owns',
        foreignKey: 'clubId'
      })
    }
  }
  Team.init(
    {
      name: DataTypes.STRING,
      schedule: DataTypes.STRING,
      scores: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
      image: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Team',
      tableName: 'teams'
    }
  )
  return Team
}

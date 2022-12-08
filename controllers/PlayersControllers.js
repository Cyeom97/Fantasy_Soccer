const { Player, User } = require('../models')

//get all players
const GetPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({
      include: [{ model: User, as: 'players', attributes: ['username'] }]
    })
    res.send(players)
  } catch (error) {
    throw error
  }
}

const createPlayers = async (req, res) => {
  try {
    const newPlayers = await Player.create(req.body)
    res.send(newPlayers)
  } catch (error) {
    throw error
  }
}

const GetOnePlayer = async (req, res) => {
  try {
    let playerId = parseInt(req.params.id)
    const player = await Player.findOne({
      where: { id: playerId },
      include: [{ model: User, as: 'players', attributes: ['username'] }]
    })
    res.send(player)
  } catch (error) {
    throw error
  }
}

const updatePlayer = async (req, res) => {
  try {
    let playerId = parseInt(req.params.id)
    let player = await Player.update(req.body, {
      where: { id: playerId }
    })
    res.send(player)
  } catch (error) {
    throw error
  }
}

const DeletePlayer = async (req, res) => {
  try {
    await Player.destroy({ where: { id: req.params.id } })
    res.send({
      message: `Your item for sale ${Products.name} has successfully been deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlayers,
  GetOnePlayer,
  createPlayers,
  updatePlayer,
  DeletePlayer
}

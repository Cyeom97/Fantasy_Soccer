const { UserPlayer, Player, User } = require('../models')

const GetPlayersByUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.id)
    const user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Player,
          as: 'owner',
          attributes: ['id', 'name', 'position', 'price']
        }
      ]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateTeam = async (req, res) => {
  try {
    const { userId } = req.body
    const { playerId } = req.body
    const findOne = await UserPlayer.findOne({
      where: { userId: userId, playerId: playerId }
    })
    if (findOne) {
      res.send({ message: 'You already have this player' })
    } else {
      const newTeam = await UserPlayer.create(req.body)
      res.send(newTeam)
    }
  } catch (error) {
    throw error
  }
}

const findAUserPlayer = async (req, res) => {
  try {
    let userId = parseInt(req.params.id)
    const user = await UserPlayer.findOne({
      where: { id: userId }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const findAllUserPlayers = async (req, res) => {
  try {
    const through = await UserPlayer.findAll()
    res.send(through)
  } catch (error) {
    throw error
  }
}

const UpdateTeam = async (req, res) => {
  try {
    let { userId } = req.body
    let update = await UserPlayer.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(update)
  } catch (error) {
    throw error
  }
}

const UpdateUserPlayer = async (req, res) => {
  try {
    const { userId } = req.body
    const { playerId } = req.body
    const { newPlayerId } = req.body
    let update = await UserPlayer.update(
      { playerId: newPlayerId },
      { where: { userId: userId, playerId: playerId } }
    )
    res.send({
      message: `${UserPlayer.userId} and ${UserPlayer.playerId} is updated`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlayersByUser,
  CreateTeam,
  findAUserPlayer,
  findAllUserPlayers,
  UpdateTeam,
  UpdateUserPlayer
}

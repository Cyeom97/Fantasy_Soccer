const { UserPlayer, Player, User } = require('../models')

const GetPlayersByUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.id)
    const user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Player,
          as: 'owners',
          attributes: ['name', 'position', 'price']
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
    const newTeam = await UserPlayer.create(req.body)
    res.send(newTeam)
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

module.exports = {
  GetPlayersByUser,
  CreateTeam,
  UpdateTeam
}

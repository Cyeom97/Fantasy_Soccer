const { User, Player } = require('../models')

const GetPlayers = async (req, res) => {
  try {
    const players = await User.findAll({
      include: [
        {
          model: Player,
          as: 'owners',
          attributes: ['name', 'position', 'price']
        }
      ]
    })
    res.send(players)
  } catch (error) {
    throw error
  }
}

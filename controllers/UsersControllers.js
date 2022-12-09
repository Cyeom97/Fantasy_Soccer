const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.id)
    let user = await User.update(req.body, {
      where: { id: userId }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  UpdateUser
}

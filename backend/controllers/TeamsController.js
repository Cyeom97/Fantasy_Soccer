const { Team, Player } = require('../models')

//get all teams
const GetTeams = async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [{ model: Player, as: 'owns', attributes: ['name', 'position'] }]
    })
    res.send(teams)
  } catch (error) {
    throw error
  }
}

const CreateTeams = async (req, res) => {
  try {
    const newTeams = await Team.create(req.body)
    res.send(newTeams)
  } catch (error) {
    throw error
  }
}

const GetOneTeam = async (req, res) => {
  try {
    let teamId = parseInt(req.params.id)
    const team = await Team.findOne({
      where: { id: teamId },
      include: [{ model: Player, as: 'owns', attributes: ['name', 'position'] }]
    })
    res.send(team)
  } catch (error) {
    throw error
  }
}

const UpdateTeam = async (req, res) => {
  try {
    let teamId = parseInt(req.params.id)
    let team = await Team.update(req.body, {
      where: { id: teamId }
    })
    res.send(team)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetTeams,
  CreateTeams,
  GetOneTeam,
  UpdateTeam
}

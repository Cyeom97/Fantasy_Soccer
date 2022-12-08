const router = require('express').Router()
const controller = require('../controllers/TeamsController')

router.get('/', controller.GetTeams)
router.get('/:id', controller.GetOneTeam)
router.post('/', controller.CreateTeams)
router.put('/:id', controller.UpdateTeam)

module.exports = router

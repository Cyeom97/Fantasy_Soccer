const router = require('express').Router()
const controller = require('../controllers/UsersControllers')
const control = require('../controllers/UserPlayersControllers')

router.get('/', controller.GetUsers)
router.get('/:id', control.GetPlayersByUser)
router.put('/:id', controller.UpdateUser)
router.post('/', control.CreateTeam)
router.put('/', control.UpdateTeam)

module.exports = router

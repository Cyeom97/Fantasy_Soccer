const router = require('express').Router()
const controller = require('../controllers/UserPlayersControllers')

router.get('/', controller.GetPlayers)

module.exports = router

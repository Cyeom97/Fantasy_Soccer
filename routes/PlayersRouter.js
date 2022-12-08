const router = require('express').Router()
const controller = require('../controllers/PlayersControllers')

router.get('/', controller.GetPlayers)
router.get('/:id', controller.GetOnePlayer)
router.post('/', controller.createPlayers)
router.put('/:id', controller.updatePlayer)
router.delete('/:id', controller.DeletePlayer)

module.exports = router

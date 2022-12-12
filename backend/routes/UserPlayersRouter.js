const router = require('express').Router()
const controller = require('../controllers/UserPlayersControllers')

router.put('/', controller.DeleteUserPlayer)
router.get('/:id', controller.findAUserPlayer)

module.exports = router

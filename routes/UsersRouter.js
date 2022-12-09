const router = require('express').Router()
const controller = require('../controllers/UsersControllers')

router.get('/', controller.GetUsers)
router.put('/:id', controller.UpdateUser)

module.exports = router

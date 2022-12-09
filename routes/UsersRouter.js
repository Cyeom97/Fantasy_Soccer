const router = require('express').Router()
const controller = require('../controllers/UsersControllers')

router.get('/', controller.GetUsers)

module.exports = router

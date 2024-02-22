const { Router } = require('express')
const UsersController = require('../controllers/usersController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticaded, usersController.update)

module.exports = usersRoutes

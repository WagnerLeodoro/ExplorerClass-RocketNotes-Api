const { Router } = require('express')
const TagsController = require('../controllers/TagsController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')

const tagsRoutes = Router()
const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticaded, tagsController.index)

module.exports = tagsRoutes

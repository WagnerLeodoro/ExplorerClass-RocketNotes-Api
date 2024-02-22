const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()
const notesController = new NotesController()

notesRoutes.use(ensureAuthenticaded)

notesRoutes.post('/', notesController.create)
notesRoutes.get('/', notesController.index)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.get('/:id', notesController.show)

module.exports = notesRoutes

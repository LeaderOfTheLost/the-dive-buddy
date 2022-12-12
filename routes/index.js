const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root'))

//User Routes
router.get('/users', controllers.getAllUsers)
router.post('/users', controllers.createUser)
router.get('/api/users/:id', controllers.getUserById)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

// Log Routes
router.post('/logs/:id', controllers.createLog)
router.get('/logs', controllers.getAllLogs)
router.get('/logs/:id', controllers.getLogById)
router.put('/logs/:id', controllers.updateLog)
router.delete('/logs/:id', controllers.deleteLog)

// Loudout Routes
router.get('/loadouts', controllers.getAllLoadouts)
router.post('/loadouts/:id', controllers.createLoadout)
router.get('/loadouts/:id', controllers.getLoadoutById)
router.put('/loadouts/:id', controllers.updateLoadout)
router.delete('/loadouts/:id', controllers.deleteLoadout)

module.exports = router

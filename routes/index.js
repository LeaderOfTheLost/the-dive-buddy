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
router.post('/loadouts/:id', controllers.createLoadout)
router.get('/loadouts', controllers.getAllLoadouts)
router.get('/loadouts/:id', controllers.getLoadoutById)
router.put('/loadouts/:id', controllers.updateLoadout)
router.delete('/loadouts/:id', controllers.deleteLoadout)

//Gear Routes
router.post('/gear/:id', controllers.createGear)
router.get('/gear', controllers.getAllGears)
router.get('/gear/:id', controllers.getGearById)
router.put('/gear/:id', controllers.updateGear)
router.delete('/gear/:id', controllers.deleteGear)

module.exports = router

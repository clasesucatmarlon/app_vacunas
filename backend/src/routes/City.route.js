const {Router} = require('express')
const router = Router()
const CityCtrl = require('../controllers/City.controller')

router.post('/create', CityCtrl.createCity)
router.post('/login', CityCtrl.login)

module.exports = router
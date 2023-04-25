const {Router} = require('express')
const router = Router()
const PersonCtrl = require('../controllers/Person.controller')
const { checkToken } = require('../helpers/Auth')

router.post('/create', checkToken, PersonCtrl.createPerson)
router.get('/list', checkToken, PersonCtrl.listAllPersons)
router.get('/list/:id', checkToken, PersonCtrl.listOnePersonById)
router.get('/listCity/:city', checkToken, PersonCtrl.listPersonsByCity)
router.get('/listStatusVaccine/:status', checkToken, PersonCtrl.ListByStatusVaccine)
router.delete('/delete/:id', checkToken, PersonCtrl.deletePerson)
router.put('/update/:id', checkToken, PersonCtrl.updatePerson)

module.exports = router
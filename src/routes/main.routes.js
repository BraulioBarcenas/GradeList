const { Router } = require('express')
const router = Router();

const mainController = require('../controller/main.controller')
const usersController = require('../controller/users.controller')

router.get('/dashboard',usersController.isLogged, mainController.renderDashboard)
router.get('/groupRegisterForm', usersController.isLogged, mainController.groupRegisterForm)
router.post('/groupRegister', mainController.groupRegister)

router.get('/editGroupForm/:id', usersController.isLogged, mainController.editGroupForm)
router.post('/updateGroup/:id', mainController.updateGroup)

router.delete('/deleteGroup/:id', mainController.deleteGroup)

// Rutas de instituciones
router.post('/registerInstitution', mainController.registerInstitution);
router.get('/showInstitution/:id', mainController.showInstitutions);
router.get('/editInstitution/:id', mainController.editInstitution);
router.post('/updateInstitution/:id', mainController.updateInstitution);

router.post('/deleteInstitution/:id', mainController.deleteInstitution);

module.exports = router;
const express = require('express')
const router = express.Router()

const admin = require('./modules/admin')
const dashboardController = require('../controllers/dashboard-controller')
const userController = require('../controllers/user-controller')
const { generalErrorHandler } = require('../middleware/error-handler')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/dashboards', dashboardController.getDashboards)
router.use('/', (req, res) => res.redirect('/dashboards'))
router.use('/', generalErrorHandler)

module.exports = router
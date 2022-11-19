const express = require('express')
const router = express.Router()

const dashboardController = require('../controllers/dashboard-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/dashboards', dashboardController.getDashboards)
router.use('/', (req, res) => res.redirect('/dashboards'))

module.exports = router
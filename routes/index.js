const express = require('express')
const router = express.Router()

const dashboardController = require('../controllers/dashboard-controller')

router.get('/dashboards', dashboardController.getDashboards)
router.use('/', (req, res) => res.redirect('/dashboards'))

module.exports = router
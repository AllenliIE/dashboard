const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/dashboards', adminController.getDashboards)
router.use('/', (req, res) => res.redirect('/admin/dashboards'))

module.exports = router
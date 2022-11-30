const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')


router.get('/tables/create', adminController.createTable)
router.get('/tables', adminController.getTables)
router.post('/tables', adminController.postTable)
router.get('/dashboards', adminController.getDashboards)
router.get('/', (req, res) => res.redirect('/admin/dashboards'))

module.exports = router
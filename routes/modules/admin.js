const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const { authenticatedAdmin } = require('../../middleware/auth')

router.get('/dashboards', authenticatedAdmin, adminController.getDashboards)
router.get('/', (req, res) => res.redirect('/admin/dashboards'))

module.exports = router
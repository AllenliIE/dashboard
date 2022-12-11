const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')


router.get('/tables/create', adminController.createTable)
router.get('/tables/:id/edit', adminController.editTable)
router.put('/tables/:id', adminController.putTable)
router.delete('/tables/:id', adminController.deleteTable)
router.post('/tables', adminController.postTable)
router.get('/tables', adminController.getTables)
router.get('/profile', adminController.getProfile)
router.get('/analysis', adminController.getAnalysis)
router.get('/category', adminController.getCategory)
router.get('/dashboards/:id/edit', adminController.editBulletin)
router.put('/dashboards/:id', adminController.putBulletin)
router.get('/dashboards', adminController.getDashboards)
router.get('/', (req, res) => res.redirect('/admin/dashboards'))

module.exports = router
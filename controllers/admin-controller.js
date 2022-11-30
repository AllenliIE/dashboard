const { Dashboard } = require('../models')

const adminController = {
  getDashboards: (req, res, next) => {
    return res.render('admin/dashboards')
  },
  getTables: (req, res, next) => {
    Dashboard.findAll({
      raw: true
    })
      .then(dashboards => res.render('admin/tables', { dashboards }))
      .catch(err => next(err))
  }
}

module.exports = adminController
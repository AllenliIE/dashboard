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
  },
  createTable: (req, res) => {
    return res.render('admin/create-table')
  },
  postTable: (req, res, next) => {
    const { name, office, price, quantity, cost, date, owner } = req.body
    if (!req.body) throw new Error('Order information is required')
    Dashboard.create({ name, office, price, quantity, cost, date, owner })
      .then(() => {
        req.flash('success_messages', 'Order was successfully created')
        res.redirect('/admin/tables')
      })
      .catch(err => next(err))
  }
}

module.exports = adminController
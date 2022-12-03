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
  },
  editTable: (req, res, next) => {
    Dashboard.findByPk(req.params.id, { raw: true })
      .then(dashboard => {
        if (!dashboard) throw new Error('Order did not exist!')
        res.render('admin/edit-table', { dashboard })
      })
      .catch(err => next(err))
  },
  putTable: (req, res, next) => {
    const { name, office, price, quantity, cost, date, owner } = req.body
    if (!req.body) throw new Error('Order information is required')
    Dashboard.findByPk(req.params.id)
      .then(dashboard => {
        if (!dashboard) throw new Error('Order did not exist')
        return dashboard.update({ name, office, price, quantity, cost, date, owner })
      })
      .then(() => {
        req.flash('success_messages', 'Order was successfully to update')
        res.redirect('/admin/tables')
      })
      .catch(err => next(err))
  },
  deleteTable: (req, res, next) => {
    return Dashboard.findByPk(req.params.id)
      .then(dashboard => {
        if (!dashboard) throw new Error('Order did not exist')
        return dashboard.destroy()
      })
      .then(() => res.redirect('/admin/tables'))
      .catch(err => next(err))
  },
  getProfile: (req, res, next) => {
    res.render('admin/profile')
  },
  getAnalysis: (req, res, next) => {
    res.render('admin/analysis')
  },
  getCategory: (req, res, next) => {
    res.render('admin/category')
  }
}

module.exports = adminController
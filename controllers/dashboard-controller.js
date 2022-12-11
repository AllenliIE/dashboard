const { Dashboard, Bulletin } = require('../models')

const dashboardController = {
  getDashboards: (req, res, next) => {
    Bulletin.findAll({
      raw: true
    })
      .then(bulletins => res.render('dashboards', { bulletins }))
      .catch(err => next(err))
  },
  getAnalysis: (req, res, next) => {
    Dashboard.findAll()
      .then(tables => {
        let saleTarget = 4000000, totalSale = 0, totalAmount = 0
        tables.forEach(item => {
          totalSale += Number(item.cost)
          totalAmount += Number(item.quantity)
        })
        res.render('dashboards-analysis', { saleTarget, totalSale, totalAmount })
      })
      .catch(err => next(err))
  },
  getCategory: (req, res, next) => {
    Dashboard.findAll({
      raw: true
    })
      .then(dashboards => res.render('dashboards-category'))
      .catch(err => next(err))
  },
  getTables: (req, res, next) => {
    Dashboard.findAll({
      raw: true
    })
      .then(dashboards => res.render('dashboards-table', { dashboards }))
      .catch(err => next(err))
  }
}

module.exports = dashboardController
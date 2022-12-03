const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db
const { Dashboard } = require('../models')

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signUp: (req, res, next) => {
    if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')

    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) throw new Error('Email already exists!')
        return bcrypt.hash(req.body.password, 10)
      })
      .then(hash => User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      }))
      .then(() => {
        req.flash('success_messages', 'Successfully registered an account!')
        res.redirect('/signin')
      })
      .catch(err => next(err))
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  signIn: (req, res) => {
    req.flash('success_messages', 'Successful user login!')
    res.redirect('/dashboards')
  },
  logout: (req, res) => {
    req.flash('success_messages', 'Successful user logout!')
    req.logout()
    res.redirect('/signin')
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
  getTables: (req, res, next) => {
    Dashboard.findAll({
      raw: true
    })
      .then(dashboards => res.render('dashboards-table', { dashboards }))
      .catch(err => next(err))
  }
}

module.exports = userController
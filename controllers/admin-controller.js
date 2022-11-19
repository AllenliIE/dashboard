const adminController = {
  getDashboards: (req, res) => {
    return res.render('admin/dashboards')
  }
}

module.exports = adminController
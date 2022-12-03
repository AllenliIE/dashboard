'use strict'
const SEED_TABLE = {
  "name": "Product-A1", "office": "Company-A", "price": "1000", "quantity": "100", "cost": "100000", "date": "2022-11-30", "owner": "Allen",
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dashboards', [{
      name: SEED_TABLE.name,
      office: SEED_TABLE.office,
      price: SEED_TABLE.price,
      quantity: SEED_TABLE.quantity,
      cost: SEED_TABLE.cost,
      date: SEED_TABLE.date,
      owner: SEED_TABLE.owner,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dashboards', null, {})
      .then(() => queryInterface.bulkDelete('Dashboards', null, {}))
  }
}

'use strict'
const SEED_BULLETIN = {
  "content": "Welcome to the system!"
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bulletins', [{
      content: SEED_BULLETIN.content,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bulletins', null, {})
      .then(() => queryInterface.bulkDelete('Bulletins', null, {}))
  }
}

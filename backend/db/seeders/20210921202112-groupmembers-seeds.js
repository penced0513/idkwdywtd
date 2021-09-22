'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('GroupMembers', [
      {
        userId: 1,
        groupId: 1,
        accepted: true
      },
      {
        groupId: 1,
        userId: 2,
        accepted: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('GroupMembers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Groups', [
      {
        owner: 1,
        name: "test group",
        groupPic: "https://cdn2.iconfinder.com/data/icons/people-groups/512/Leader_Avatar-512.png"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Groups', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

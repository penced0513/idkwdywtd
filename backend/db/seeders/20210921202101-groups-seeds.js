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
        groupPic: "https://developer.jboss.org/images/jive-sgroup-default-portrait-large.png"
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

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Events', [
        {
          name: 'My Test Event',
          eventPic: "https://www.vhv.rs/dpng/d/487-4871907_grey-x-icon-png-transparent-png.png",
          duration: 1,
          startDate: new Date(Date.now() + 99999999999),
          host: 1
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Events', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

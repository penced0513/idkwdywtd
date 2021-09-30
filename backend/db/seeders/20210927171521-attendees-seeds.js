'use strict';
const faker = require('faker');
const additionalAttendees = []

for (let i = 0; i < 250 ; i++) {
  
  
  const attendee = {
    eventId: faker.datatype.number({ min:1, max: 31}),
    userId: faker.datatype.number({ min:1, max: 57}),
    accepted: i % 2 ? true : null,
  };

  additionalAttendees.push(attendee)
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Attendees', [
        {
          userId: 1,
          eventId: 1,
          accepted: true
        },
        ...additionalAttendees
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Attendees', null, {});
  }
};

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
        {
          userId: 53,
          eventId: 2,
          accepted: true
        },
        {
          userId: 15,
          eventId: 3,
          accepted: true
        },
        {
          userId: 24,
          eventId: 4,
          accepted: true
        },
        {
          userId: 46,
          eventId: 5,
          accepted: true
        },
        {
          userId: 45,
          eventId: 6,
          accepted: true
        },
        {
          userId: 51,
          eventId: 7,
          accepted: true
        },
        {
          userId: 8,
          eventId: 8,
          accepted: true
        },
        {
          userId: 42,
          eventId: 9,
          accepted: true
        },
        {
          userId: 41,
          eventId: 10,
          accepted: true
        },
        {
          userId: 1,
          eventId: 11,
          accepted: true
        },
        {
          userId: 7,
          eventId: 12,
          accepted: true
        },
        {
          userId: 20,
          eventId: 13,
          accepted: true
        },
        {
          userId: 44,
          eventId: 14,
          accepted: true
        },
        {
          userId: 8,
          eventId: 15,
          accepted: true
        },
        {
          userId: 13,
          eventId: 16,
          accepted: true
        },
        {
          userId: 48,
          eventId: 17,
          accepted: true
        },
        {
          userId: 32,
          eventId: 18,
          accepted: true
        },
        {
          userId: 9,
          eventId: 19,
          accepted: true
        },
        {
          userId: 34,
          eventId: 20,
          accepted: true
        },
        {
          userId: 4,
          eventId: 21,
          accepted: true
        },
        {
          userId: 40,
          eventId: 22,
          accepted: true
        },
        {
          userId: 20,
          eventId: 23,
          accepted: true
        },
        {
          userId: 3,
          eventId: 24,
          accepted: true
        },
        {
          userId: 7,
          eventId: 25,
          accepted: true
        },
        {
          userId: 53,
          eventId: 26,
          accepted: true
        },
        {
          userId: 44,
          eventId: 27,
          accepted: true
        },
        {
          userId: 18,
          eventId: 28,
          accepted: true
        },
        {
          userId: 19,
          eventId: 29,
          accepted: true
        },
        {
          userId: 19,
          eventId: 30,
          accepted: true
        },
        {
          userId: 18,
          eventId: 31,
          accepted: true
        },
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

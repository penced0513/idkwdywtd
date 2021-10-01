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
        { eventId: 3, userId: 22, accepted: null },
        { eventId: 10, userId: 40, accepted: true },
        { eventId: 27, userId: 38, accepted: null },
        { eventId: 31, userId: 14, accepted: true },
        { eventId: 8, userId: 19, accepted: null },
        { eventId: 20, userId: 2, accepted: true },
        { eventId: 29, userId: 31, accepted: null },
        { eventId: 22, userId: 12, accepted: true },
        { eventId: 9, userId: 4, accepted: null },
        { eventId: 15, userId: 27, accepted: true },
        { eventId: 14, userId: 30, accepted: null },
        { eventId: 5, userId: 31, accepted: true },
        { eventId: 1, userId: 32, accepted: null },
        { eventId: 25, userId: 47, accepted: true },
        { eventId: 18, userId: 46, accepted: null },
        { eventId: 10, userId: 9, accepted: true },
        { eventId: 15, userId: 57, accepted: null },
        { eventId: 6, userId: 20, accepted: true },
        { eventId: 19, userId: 12, accepted: null },
        { eventId: 2, userId: 27, accepted: null },
        { eventId: 24, userId: 25, accepted: true },
        { eventId: 19, userId: 41, accepted: null },
        { eventId: 22, userId: 16, accepted: true },
        { eventId: 24, userId: 10, accepted: null },
        { eventId: 12, userId: 23, accepted: true },
        { eventId: 22, userId: 11, accepted: null },
        { eventId: 26, userId: 29, accepted: true },
        { eventId: 20, userId: 28, accepted: null },
        { eventId: 18, userId: 4, accepted: true },
  
  
        { eventId: 30, userId: 6, accepted: null },
        { eventId: 28, userId: 30, accepted: true },
        { eventId: 18, userId: 53, accepted: null },
        { eventId: 19, userId: 44, accepted: true },
        { eventId: 15, userId: 33, accepted: null },
        { eventId: 21, userId: 43, accepted: true },
        { eventId: 20, userId: 21, accepted: null },
        { eventId: 11, userId: 9, accepted: true },
        { eventId: 30, userId: 39, accepted: null },
        { eventId: 4, userId: 45, accepted: true },
        { eventId: 10, userId: 46, accepted: null },
        { eventId: 28, userId: 27, accepted: true },
        { eventId: 15, userId: 56, accepted: null },
        { eventId: 24, userId: 1, accepted: true },
        { eventId: 8, userId: 31, accepted: null },
        { eventId: 24, userId: 56, accepted: true },
        { eventId: 23, userId: 52, accepted: null },
        { eventId: 6, userId: 47, accepted: true },
        { eventId: 26, userId: 46, accepted: null },
        { eventId: 14, userId: 21, accepted: true },
        { eventId: 27, userId: 53, accepted: null },
        { eventId: 25, userId: 14, accepted: true },
  
  
        { eventId: 1, userId: 40, accepted: null },
        { eventId: 4, userId: 38, accepted: true },
        { eventId: 30, userId: 46, accepted: null },
        { eventId: 14, userId: 4, accepted: true },
        { eventId: 6, userId: 38, accepted: null },
        { eventId: 18, userId: 22, accepted: true },
        { eventId: 9, userId: 55, accepted: null },
        { eventId: 30, userId: 1, accepted: true },
        { eventId: 15, userId: 5, accepted: null },
        { eventId: 30, userId: 43, accepted: true },
  
        { eventId: 1, userId: 16, accepted: null },
        { eventId: 27, userId: 47, accepted: true },
        { eventId: 13, userId: 47, accepted: null },
        { eventId: 17, userId: 6, accepted: true },
        { eventId: 27, userId: 39, accepted: null },
        { eventId: 28, userId: 57, accepted: true },
        { eventId: 8, userId: 47, accepted: null },
        { eventId: 21, userId: 15, accepted: true },
        { eventId: 7, userId: 37, accepted: null },
        { eventId: 18, userId: 25, accepted: true },
  
        { eventId: 23, userId: 27, accepted: null },
        { eventId: 29, userId: 38, accepted: true },
        { eventId: 7, userId: 15, accepted: true },
        { eventId: 5, userId: 7, accepted: null },
        { eventId: 21, userId: 21, accepted: true },
  
  
        { eventId: 21, userId: 19, accepted: null },
        { eventId: 28, userId: 4, accepted: true },
        { eventId: 7, userId: 12, accepted: null },
        { eventId: 1, userId: 39, accepted: true },
        { eventId: 1, userId: 47, accepted: null },
        { eventId: 2, userId: 54, accepted: true },
        { eventId: 5, userId: 23, accepted: null },
        { eventId: 11, userId: 35, accepted: true },
        { eventId: 18, userId: 3, accepted: null },
        { eventId: 28, userId: 43, accepted: true },
  
        { eventId: 13, userId: 37, accepted: null },
        { eventId: 17, userId: 31, accepted: true },
        { eventId: 2, userId: 52, accepted: null },
        { eventId: 4, userId: 10, accepted: true },
  
        { eventId: 27, userId: 24, accepted: null },
        { eventId: 27, userId: 14, accepted: true },
        { eventId: 1, userId: 33, accepted: null },
        { eventId: 1, userId: 6, accepted: true },
        { eventId: 8, userId: 30, accepted: null },
        { eventId: 9, userId: 36, accepted: true },
        { eventId: 9, userId: 24, accepted: null },
        { eventId: 16, userId: 56, accepted: true },
        { eventId: 29, userId: 15, accepted: null },
        { eventId: 8, userId: 27, accepted: true },
        
        { eventId: 8, userId: 48, accepted: null },
        { eventId: 21, userId: 42, accepted: true },
        { eventId: 28, userId: 45, accepted: null },
        { eventId: 10, userId: 19, accepted: true },
  
        { eventId: 19, userId: 14, accepted: null },
        { eventId: 1, userId: 19, accepted: true },
        { eventId: 1, userId: 7, accepted: null },
        { eventId: 28, userId: 3, accepted: true },
        { eventId: 23, userId: 2, accepted: null },
        { eventId: 20, userId: 43, accepted: true },
        { eventId: 4, userId: 35, accepted: null },
        { eventId: 23, userId: 40, accepted: true },
        { eventId: 5, userId: 1, accepted: null },
        { eventId: 19, userId: 33, accepted: true },
  
        { eventId: 19, userId: 26, accepted: null },
        { eventId: 9, userId: 45, accepted: true },
        { eventId: 6, userId: 56, accepted: null },
        { eventId: 21, userId: 49, accepted: true },
  
  
        { eventId: 31, userId: 19, accepted: true },
        { eventId: 5, userId: 34, accepted: null },
        { eventId: 3, userId: 57, accepted: true },
        { eventId: 21, userId: 35, accepted: null },
        { eventId: 15, userId: 23, accepted: true },
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

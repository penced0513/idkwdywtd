'use strict';
const faker = require('faker');
const {randomArr} = require('./randomImages/randomimages')

const additionalEvents = []

for (let i = 0; i < 30 ; i++) {
  
  
  const event = {
    host: faker.datatype.number({ min:1, max: 57}),
    name: faker.random.words(),
    eventPic: randomArr[(randomArr.length-1)-i],
    startDate: faker.date.future(),
    duration: faker.datatype.number({min:1, max:7 })
  };

  additionalEvents.push(event)
}
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
        },
        ...additionalEvents
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

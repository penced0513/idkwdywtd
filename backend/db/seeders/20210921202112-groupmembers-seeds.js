'use strict';
const faker = require('faker');
const additionalGroupMembers = []

for (let i = 0; i < 250 ; i++) {
  
  
  const group = {
    groupId: faker.datatype.number({ min:1, max: 31}),
    userId: faker.datatype.number({ min:1, max: 57}),
    accepted: i % 2 ? true : null,
  };

  additionalGroupMembers.push(group)
}
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
      },
      {
        groupId: 1,
        userId: 3,
      },
      {
        groupId:1,
        userId:4,
        accepted: true
      },
      ...additionalGroupMembers
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

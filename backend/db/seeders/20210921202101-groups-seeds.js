'use strict';
const faker = require('faker');
const {randomArr} = require('./randomImages/randomimages')
const additionalGroups = []

for (let i = 0; i < 30 ; i++) {
  
  
  const group = {
    owner: faker.datatype.number({ min:1, max: 57}),
    name: faker.random.words(),
    groupPic: randomArr[(randomArr.length-1)-i]
  };

  additionalGroups.push(group)
}

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
      },
      ...additionalGroups
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

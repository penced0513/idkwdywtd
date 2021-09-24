'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },      
      {
        email: faker.internet.email(),
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

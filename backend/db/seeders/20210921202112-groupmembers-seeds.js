'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('GroupMembers', [
      {
        userId: 1,
        groupId: 1,
        accepted: true
      },     
      {
        groupId: 2,
        userId: 7,
        accepted: true
      },
      {
        groupId: 3,
        userId: 35,
      },
      {
        groupId:4,
        userId:54,
        accepted: true
      },
      {
        groupId:5,
        userId:21,
        accepted: true
      },
      {
        groupId:6,
        userId:14,
        accepted: true
      },
      {
        groupId:7,
        userId:3,
        accepted: true
      },
      {
        groupId:8,
        userId:24,
        accepted: true
      },
      {
        groupId:9,
        userId:18,
        accepted: true
      },
      {
        groupId:10,
        userId:49,
        accepted: true
      },
      {
        groupId:11,
        userId:25,
        accepted: true
      },
      {
        groupId:12,
        userId:55,
        accepted: true
      },
      {
        groupId:13,
        userId:5,
        accepted: true
      },
      {
        groupId:14,
        userId:1,
        accepted: true
      },
      {
        groupId:15,
        userId:10,
        accepted: true
      },
      {
        groupId:16,
        userId:21,
        accepted: true
      },
      {
        groupId:17,
        userId:47,
        accepted: true
      },
      {
        groupId:18,
        userId:12,
        accepted: true
      },
      {
        groupId:19,
        userId:50,
        accepted: true
      },
      {
        groupId:20,
        userId:4,
        accepted: true
      },
      {
        groupId:21,
        userId:22,
        accepted: true
      },
      {
        groupId:22,
        userId:18,
        accepted: true
      },
      {
        groupId:23,
        userId:50,
        accepted: true
      },
      {
        groupId:24,
        userId:51,
        accepted: true
      },
      {
        groupId:25,
        userId:36,
        accepted: true
      },
      {
        groupId:26,
        userId:43,
        accepted: true
      },
      {
        groupId:27,
        userId:17,
        accepted: true
      },
      {
        groupId:28,
        userId:2,
        accepted: true
      },
      {
        groupId:29,
        userId:49,
        accepted: true
      },
      {
        groupId:30,
        userId:42,
        accepted: true
      },
      {
        groupId:31,
        userId:6,
        accepted: true
      },
      

      { groupId: 3, userId: 22, accepted: null },
      { groupId: 10, userId: 40, accepted: true },
      { groupId: 27, userId: 38, accepted: null },
      { groupId: 31, userId: 14, accepted: true },
      { groupId: 8, userId: 19, accepted: null },
      { groupId: 20, userId: 2, accepted: true },
      { groupId: 29, userId: 31, accepted: null },
      { groupId: 22, userId: 12, accepted: true },
      { groupId: 9, userId: 4, accepted: null },
      { groupId: 15, userId: 27, accepted: true },
      { groupId: 14, userId: 30, accepted: null },
      { groupId: 5, userId: 31, accepted: true },
      { groupId: 1, userId: 32, accepted: null },
      { groupId: 25, userId: 47, accepted: true },
      { groupId: 18, userId: 46, accepted: null },
      { groupId: 10, userId: 9, accepted: true },
      { groupId: 15, userId: 57, accepted: null },
      { groupId: 6, userId: 20, accepted: true },
      { groupId: 19, userId: 12, accepted: null },
      { groupId: 2, userId: 27, accepted: null },
      { groupId: 24, userId: 25, accepted: true },
      { groupId: 19, userId: 41, accepted: null },
      { groupId: 22, userId: 16, accepted: true },
      { groupId: 24, userId: 10, accepted: null },
      { groupId: 12, userId: 23, accepted: true },
      { groupId: 22, userId: 11, accepted: null },
      { groupId: 26, userId: 29, accepted: true },
      { groupId: 20, userId: 28, accepted: null },
      { groupId: 18, userId: 4, accepted: true },


      { groupId: 30, userId: 6, accepted: null },
      { groupId: 28, userId: 30, accepted: true },
      { groupId: 18, userId: 53, accepted: null },
      { groupId: 19, userId: 44, accepted: true },
      { groupId: 15, userId: 33, accepted: null },
      { groupId: 21, userId: 43, accepted: true },
      { groupId: 20, userId: 21, accepted: null },
      { groupId: 11, userId: 9, accepted: true },
      { groupId: 30, userId: 39, accepted: null },
      { groupId: 4, userId: 45, accepted: true },
      { groupId: 10, userId: 46, accepted: null },
      { groupId: 28, userId: 27, accepted: true },
      { groupId: 15, userId: 56, accepted: null },
      { groupId: 24, userId: 1, accepted: true },
      { groupId: 8, userId: 31, accepted: null },
      { groupId: 24, userId: 56, accepted: true },
      { groupId: 23, userId: 52, accepted: null },
      { groupId: 6, userId: 47, accepted: true },
      { groupId: 26, userId: 46, accepted: null },
      { groupId: 14, userId: 21, accepted: true },
      { groupId: 27, userId: 53, accepted: null },
      { groupId: 25, userId: 14, accepted: true },


      { groupId: 1, userId: 40, accepted: null },
      { groupId: 4, userId: 38, accepted: true },
      { groupId: 30, userId: 46, accepted: null },
      { groupId: 14, userId: 4, accepted: true },
      { groupId: 6, userId: 38, accepted: null },
      { groupId: 18, userId: 22, accepted: true },
      { groupId: 9, userId: 55, accepted: null },
      { groupId: 30, userId: 1, accepted: true },
      { groupId: 15, userId: 5, accepted: null },
      { groupId: 30, userId: 43, accepted: true },

      { groupId: 1, userId: 16, accepted: null },
      { groupId: 27, userId: 47, accepted: true },
      { groupId: 13, userId: 47, accepted: null },
      { groupId: 17, userId: 6, accepted: true },
      { groupId: 27, userId: 39, accepted: null },
      { groupId: 28, userId: 57, accepted: true },
      { groupId: 8, userId: 47, accepted: null },
      { groupId: 21, userId: 15, accepted: true },
      { groupId: 7, userId: 37, accepted: null },
      { groupId: 18, userId: 25, accepted: true },

      { groupId: 23, userId: 27, accepted: null },
      { groupId: 29, userId: 38, accepted: true },
      { groupId: 7, userId: 15, accepted: true },
      { groupId: 5, userId: 7, accepted: null },
      { groupId: 21, userId: 21, accepted: true },


      { groupId: 21, userId: 19, accepted: null },
      { groupId: 28, userId: 4, accepted: true },
      { groupId: 7, userId: 12, accepted: null },
      { groupId: 1, userId: 39, accepted: true },
      { groupId: 1, userId: 47, accepted: null },
      { groupId: 2, userId: 54, accepted: true },
      { groupId: 5, userId: 23, accepted: null },
      { groupId: 11, userId: 35, accepted: true },
      { groupId: 18, userId: 3, accepted: null },
      { groupId: 28, userId: 43, accepted: true },

      { groupId: 13, userId: 37, accepted: null },
      { groupId: 17, userId: 31, accepted: true },
      { groupId: 2, userId: 52, accepted: null },
      { groupId: 4, userId: 10, accepted: true },

      { groupId: 27, userId: 24, accepted: null },
      { groupId: 27, userId: 14, accepted: true },
      { groupId: 1, userId: 33, accepted: null },
      { groupId: 1, userId: 6, accepted: true },
      { groupId: 8, userId: 30, accepted: null },
      { groupId: 9, userId: 36, accepted: true },
      { groupId: 9, userId: 24, accepted: null },
      { groupId: 16, userId: 56, accepted: true },
      { groupId: 29, userId: 15, accepted: null },
      { groupId: 8, userId: 27, accepted: true },
      
      { groupId: 8, userId: 48, accepted: null },
      { groupId: 21, userId: 42, accepted: true },
      { groupId: 28, userId: 45, accepted: null },
      { groupId: 10, userId: 19, accepted: true },

      { groupId: 19, userId: 14, accepted: null },
      { groupId: 1, userId: 19, accepted: true },
      { groupId: 1, userId: 7, accepted: null },
      { groupId: 28, userId: 3, accepted: true },
      { groupId: 23, userId: 2, accepted: null },
      { groupId: 20, userId: 43, accepted: true },
      { groupId: 4, userId: 35, accepted: null },
      { groupId: 23, userId: 40, accepted: true },
      { groupId: 5, userId: 1, accepted: null },
      { groupId: 19, userId: 33, accepted: true },

      { groupId: 19, userId: 26, accepted: null },
      { groupId: 9, userId: 45, accepted: true },
      { groupId: 6, userId: 56, accepted: null },
      { groupId: 21, userId: 49, accepted: true },


      { groupId: 31, userId: 19, accepted: true },
      { groupId: 5, userId: 34, accepted: null },
      { groupId: 3, userId: 57, accepted: true },
      { groupId: 21, userId: 35, accepted: null },
      { groupId: 15, userId: 23, accepted: true },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('GroupMembers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

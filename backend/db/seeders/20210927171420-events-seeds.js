'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
          name: 'My Test Event',
          eventPic: "https://www.vhv.rs/dpng/d/487-4871907_grey-x-icon-png-transparent-png.png",
          duration: 1,
          startDate: new Date(Date.now() + 99999999999),
          host: 1
        },
        {
          host: 53,
          name: 'matrix',
          eventPic: 'https://images.unsplash.com/photo-1631337034560-28f2a00ab3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-03-28T13:11:53.958Z",
          duration: 7
        },
        {
          host: 15,
          name: 'modular stable Avon',
          eventPic: 'https://images.unsplash.com/photo-1629204884772-fe5703498336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-11-01T02:39:42.007Z",
          duration: 1
        },
        {
          host: 24,
          name: 'niches Buckinghamshire',
          eventPic: 'https://images.unsplash.com/photo-1631217800841-0fbe130f0d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-08-06T02:09:50.632Z",
          duration: 7
        },
        {
          host: 46,
          name: 'navigating calculating',
          eventPic: 'https://images.unsplash.com/photo-1629550754092-8ec868699367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-09-30T08:24:44.332Z",
          duration: 3
        },
        {
          host: 45,
          name: 'Architect card',
          eventPic: 'https://images.unsplash.com/photo-1631387965708-f9c275d9a3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-06-11T01:55:21.190Z",
          duration: 5
        },
        {
          host: 51,
          name: 'supply-chains repurpose bricks-and-clicks',
          eventPic: 'https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-05-05T20:06:35.160Z",
          duration: 3
        },
        {
          host: 8,
          name: 'port real-time Steel',
          eventPic: 'https://images.unsplash.com/photo-1629240579371-8e40539c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-06-09T02:22:51.009Z",
          duration: 6
        },
        {
          host: 42,
          name: 'withdrawal',
          eventPic: 'https://images.unsplash.com/photo-1630892300056-bfa11773ee5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-09-02T18:15:36.958Z",
          duration: 4
        },
        {
          host: 41,
          name: 'definition',
          eventPic: 'https://images.unsplash.com/photo-1629584923720-40c3f9b55709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-06-21T12:45:39.788Z",
          duration: 3
        },
        {
          host: 1,
          name: 'Berkshire Frozen',
          eventPic: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-01-18T02:45:57.301Z",
          duration: 2
        },
        {
          host: 7,
          name: 'Internal users PNG',
          eventPic: 'https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-01-16T16:52:02.651Z",
          duration: 7
        },
        {
          host: 20,
          name: 'Wooden',
          eventPic: 'https://images.unsplash.com/photo-1631499264602-60f495f5b657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-02-02T02:54:59.035Z",
          duration: 6
        },
        {
          host: 44,
          name: 'Bedfordshire deposit',
          eventPic: 'https://images.unsplash.com/photo-1630943058627-1089d947f612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-05-11T05:38:44.472Z",
          duration: 3
        },
        {
          host: 8,
          name: 'efficient',
          eventPic: 'https://images.unsplash.com/photo-1630593729876-7202716930da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-10-13T14:54:24.259Z",
          duration: 7
        },
        {
          host: 13,
          name: '3rd',
          eventPic: 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-10-05T16:24:29.148Z",
          duration: 5
        },
        {
          host: 48,
          name: 'transmitting Computer',
          eventPic: 'https://images.unsplash.com/photo-1629521446236-fd258987fd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-04-01T06:44:57.814Z",
          duration: 5
        },
        {
          host: 32,
          name: 'Credit Christmas Neck',
          eventPic: 'https://images.unsplash.com/photo-1631477076110-2b8c1fe0f3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-02-19T12:33:19.493Z",
          duration: 7
        },
        {
          host: 9,
          name: 'Intuitive payment Berkshire',
          eventPic: 'https://images.unsplash.com/photo-1630892300056-bfa11773ee5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-03-19T14:21:09.204Z",
          duration: 4
        },
        {
          host: 34,
          name: 'Berkshire',
          eventPic: 'https://images.unsplash.com/photo-1629584923720-40c3f9b55709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-05-30T09:41:21.240Z",
          duration: 5
        },
        {
          host: 4,
          name: 'e-tailers Bedfordshire',
          eventPic: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-11-13T18:11:44.786Z",
          duration: 2
        },
        {
          host: 40,
          name: 'synthesizing',
          eventPic: 'https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-06-30T19:04:44.198Z",
          duration: 7
        },
        {
          host: 20,
          name: 'Island Bedfordshire',
          eventPic: 'https://images.unsplash.com/photo-1631499264602-60f495f5b657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-08-21T08:34:17.950Z",
          duration: 1
        },
        {
          host: 3,
          name: 'eyeballs',
          eventPic: 'https://images.unsplash.com/photo-1630943058627-1089d947f612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-12-09T21:35:38.287Z",
          duration: 2
        },
        {
          host: 7,
          name: 'Concrete scalable Program',
          eventPic: 'https://images.unsplash.com/photo-1630593729876-7202716930da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-04-19T21:33:21.320Z",
          duration: 6
        },
        {
          host: 53,
          name: 'Small',
          eventPic: 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-03-20T11:15:45.672Z",
          duration: 5
        },
        {
          host: 44,
          name: 'back-end copy Stream',
          eventPic: 'https://images.unsplash.com/photo-1629521446236-fd258987fd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-01-07T02:31:05.224Z",
          duration: 7
        },
        {
          host: 18,
          name: 'Illinois',
          eventPic: 'https://images.unsplash.com/photo-1631477076110-2b8c1fe0f3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-08-29T11:22:18.493Z",
          duration: 1
        },
        {
          host: 19,
          name: 'hierarchy Expanded cross-platform',
          eventPic: 'https://images.unsplash.com/photo-1631420230913-f0a455dad9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-10-15T06:19:14.523Z",
          duration: 2
        },
        {
          host: 19,
          name: 'silver teal',
          eventPic: 'https://images.unsplash.com/photo-1630341692588-653340304168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2021-10-28T15:12:21.118Z",
          duration: 1
        },
        {
          host: 18,
          name: 'Bedfordshire mission-critical Toys',
          eventPic: 'https://images.unsplash.com/photo-1629996734437-7217ae43bb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080',
          startDate: "2022-05-15T07:08:41.845Z",
          duration: 2
        },




        
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

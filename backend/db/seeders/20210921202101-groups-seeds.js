'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Groups', [
      {
        owner: 1,
        name: "test group",
        groupPic: "https://cdn2.iconfinder.com/data/icons/people-groups/512/Leader_Avatar-512.png"
      },
      
        {
          owner: 7,
          name: 'invoice database Infrastructure',
          groupPic: 'https://images.unsplash.com/photo-1631337034560-28f2a00ab3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 35,
          name: 'engineer transition Specialist',
          groupPic: 'https://images.unsplash.com/photo-1629204884772-fe5703498336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 54,
          name: 'eco-centric encompassing Intelligent',
          groupPic: 'https://images.unsplash.com/photo-1631217800841-0fbe130f0d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 21,
          name: 'Rupee Tuna',
          groupPic: 'https://images.unsplash.com/photo-1629550754092-8ec868699367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 14,
          name: 'Cambridgeshire hack Investor',
          groupPic: 'https://images.unsplash.com/photo-1631387965708-f9c275d9a3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 3,
          name: 'Soap Borders structure',
          groupPic: 'https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 24,
          name: 'Avon tolerance Gorgeous',
          groupPic: 'https://images.unsplash.com/photo-1629240579371-8e40539c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 18,
          name: 'Bike local Soft',
          groupPic: 'https://images.unsplash.com/photo-1630892300056-bfa11773ee5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 49,
          name: 'Chief (E.M.U.-6) withdrawal',
          groupPic: 'https://images.unsplash.com/photo-1629584923720-40c3f9b55709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 25,
          name: 'Centers Guam De-engineered',
          groupPic: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMg&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 55,
          name: 'Beauty',
          groupPic: 'https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 5,
          name: 'Handmade',
          groupPic: 'https://images.unsplash.com/photo-1631499264602-60f495f5b657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 1,
          name: 'Handcrafted Ball parse',
          groupPic: 'https://images.unsplash.com/photo-1630943058627-1089d947f612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 10,
          name: 'Buckinghamshire Outdoors',
          groupPic: 'https://images.unsplash.com/photo-1630593729876-7202716930da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 21,
          name: 'multi-byte Tasty',
          groupPic: 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 47,
          name: 'Decentralized',
          groupPic: 'https://images.unsplash.com/photo-1629521446236-fd258987fd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 12,
          name: 'maroon Baby',
          groupPic: 'https://images.unsplash.com/photo-1631477076110-2b8c1fe0f3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 50,
          name: 'Technician calculate',
          groupPic: 'https://images.unsplash.com/photo-1630892300056-bfa11773ee5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 4,
          name: 'Intuitive deposit Romania',
          groupPic: 'https://images.unsplash.com/photo-1629584923720-40c3f9b55709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 22,
          name: 'Zambia one-to-one',
          groupPic: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 18,
          name: 'Rufiyaa red',
          groupPic: 'https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 50,
          name: 'hacking Checking Computers',
          groupPic: 'https://images.unsplash.com/photo-1631499264602-60f495f5b657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 51,
          name: 'Public-key fuchsia quantifying',
          groupPic: 'https://images.unsplash.com/photo-1630943058627-1089d947f612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 36,
          name: 'impactful',
          groupPic: 'https://images.unsplash.com/photo-1630593729876-7202716930da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMQ&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 43,
          name: 'mint',
          groupPic: 'https://images.unsplash.com/photo-1629122433131-53e850a3a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 17,
          name: 'Awesome Lanka partnerships',
          groupPic: 'https://images.unsplash.com/photo-1629521446236-fd258987fd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 2,
          name: 'Republic',
          groupPic: 'https://images.unsplash.com/photo-1631477076110-2b8c1fe0f3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 49,
          name: 'contextually-based Home e-business',
          groupPic: 'https://images.unsplash.com/photo-1631420230913-f0a455dad9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 42,
          name: 'Health EXE',
          groupPic: 'https://images.unsplash.com/photo-1630341692588-653340304168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080'
        },
        {
          owner: 6,
          name: 'parse',
          groupPic: 'https://images.unsplash.com/photo-1629996734437-7217ae43bb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMzEwMA&ixlib=rb-1.2.1&q=80&w=1080'
        }
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Groups', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

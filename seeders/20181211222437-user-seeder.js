'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
        nama : 'John Doe',
        email : 'elfin@gmail.com',
        telp : 1234,
        alamat : 'jauh',
        daerahId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
      nama : 'itce',
      email : 'itce@gmail.com',
      telp : 4124,
      alamat : 'alamat',
      daerahId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}); 
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

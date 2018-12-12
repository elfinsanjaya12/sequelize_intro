'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.addColumn('Users', 'alamat', Sequelize.STRING)
  },  

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'alamat', Sequelize.STRING) 
  }
};

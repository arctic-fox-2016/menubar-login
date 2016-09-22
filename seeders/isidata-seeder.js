'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users',[
      { username : 'lilianti',
        password : '12345',
        email : 'lilianti@gmail.com',
        role : 'SuperAdmin',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { username : 'tevin',
        password : '12345',
        email : 'tevin@gmail.com',
        role : 'SuperAdmin',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { username : 'mickey',
        password : '12345',
        email : 'mickey@gmail.com',
        role : 'Administrator',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { username : 'hello',
        password : '12345',
        email : 'kitty@gmail.com',
        role : 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { username : 'ultraman',
        password : '12345',
        email : 'ultra.man@gmail.com',
        role : 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

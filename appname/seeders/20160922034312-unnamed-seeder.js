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
        { username : 'sahbana',
          email : 'sahbana@gmail.com',
          password : '123456',
          role : 'admin',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        { username : 'imam',
          email : 'imam@gmail.com',
          password : '123456',
          role : 'admin',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        { username : 'ivan',
          email : 'ivan@gmail.com',
          password : '123456',
          role : 'user',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        { username : 'tevin',
          email : 'tevin@gmail.com',
          password : '123456',
          role : 'user',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        { username : 'ari',
          email : 'ari@gmail.com',
          password : '123456',
          role : 'user',
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

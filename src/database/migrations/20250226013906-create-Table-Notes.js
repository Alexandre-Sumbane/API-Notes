'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('Notes', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "users",
            key: "id"
          },
          onDelete: "Cascade",
          onUpdate: "Cascade"
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }

       });

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('Notes');

  }
};

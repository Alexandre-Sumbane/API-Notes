'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('Tags', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tag_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      note_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "notes",
          key: "id"
        },
        onDelete: "Cascade",
        onUpdate: "Cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Tags');

  }
};

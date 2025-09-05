'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fixtures', {
      fixture_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fixture_code: {
        type: Sequelize.STRING
      },
      home_team: {
        type: Sequelize.STRING
      },
      away_team: {
        type: Sequelize.STRING
      },
      fixture_date: {
        type: Sequelize.DATEONLY
      },
      fixture_time: {
        type: Sequelize.TIME
      },
      venue: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    league: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM('scheduled', 'ongoing', 'finished', 'cancelled'),
      allowNull: false,
      defaultValue: 'scheduled',

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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fixtures');
  }
};
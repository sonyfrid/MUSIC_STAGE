module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Events',
          },
          key: 'id',
        },
      },
      artist_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Artists',
          },
          key: 'id',
        },
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: null,
      },
      message: {
        type: Sequelize.TEXT,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EventStatuses');
  },
};

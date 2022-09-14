module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Types',
          },
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      info: {
        type: Sequelize.TEXT,
      },
      place_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Places',
          },
          key: 'id',
        },
      },
      date: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.TEXT,
      },
      photo: {
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
    await queryInterface.dropTable('Events');
  },
};

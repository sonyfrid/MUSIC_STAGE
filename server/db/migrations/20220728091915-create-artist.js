module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mail: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      pass: {
        type: Sequelize.TEXT,
      },
      genre: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      info: {
        type: Sequelize.TEXT,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      vk: {
        type: Sequelize.STRING,
      },
      genre_id_fs: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Genres',
          },
          key: 'id',
        },
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
    await queryInterface.dropTable('Artists');
  },
};

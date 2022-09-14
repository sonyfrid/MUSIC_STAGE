module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EventStatuses', [{
      event_id: 1,
      artist_id: 1,
      status: null,
      message: 'Хочу принять участие в фестивале',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EventStatuses', null, {});
  },
};

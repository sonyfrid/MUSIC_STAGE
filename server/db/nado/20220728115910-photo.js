module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      photo: 'https://petersburg24.ru/files/articles/942_image.jpg?1531051516',
      place_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      photo: 'https://www.restoclub.ru/uploads/articleinner_thumbnail_big/f/a/1/3/fa137ecee25a76b499e188ed44515f6b.jpg',
      place_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [{
      name: 'Фестиваль',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Открытие',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Благотворительное мероприятие',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Выставка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Концерт',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Праздник',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [{
      name: 'Indie Rock',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Indie Pop',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dream Pop',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Rock',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Shoegaze',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Punk',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'New wave',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Pop-punk',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Alternative rock',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  },
};

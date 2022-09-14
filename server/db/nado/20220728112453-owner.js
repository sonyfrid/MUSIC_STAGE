const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Owners', [{
      mail: 'ionofl@mail.ru',
      name: 'Александр Ионов',
      pass: await bcrypt.hash('123', 10),
      phone: '+7-916-363-76-84',
      photo: 'https://img07.rl0.ru/afisha/1110x-/daily.afisha.ru/uploads/images/6/bc/6bcadfa27d9e5973596dfc74660c252d.png',
      telegram: 'ionoff',
      instagram: 'ionoff',
      info: 'Директор культового петербургского клуба ИОНОТЕКА и основатель независимого лейбла IONOFF MUSIC',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Owners', null, {});
  },
};

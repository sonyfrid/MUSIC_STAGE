const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Artists', [{
      mail: 'ustal@mail.ru',
      name: 'ustal',
      pass: await bcrypt.hash('123', 10),
      genre: 'Indie Pop',
      photo: 'https://sun9-57.userapi.com/impf/c854028/v854028673/4f2cc/XD4fyo92yLw.jpg?size=2560x1707&quality=96&sign=bde695be8268f90bfe0e66dec081f5b4&type=album',
      info: 'Голос молодых, звучащий из панельных домов. Стиль твоих юных лет во дворах спального района. Оркестр банкоматов, подворотен и пыльных дорог играющий из колонок. Все это и об этом инди группа ustal. Мы кричим тебе, о том, что молодым быть не просто. А ты танцуй.',
      instagram: 'ustalustal',
      phone: '+7-916-352-75-94',
      vk: 'https://vk.com/ustalustal',
      genre_id_fs: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      mail: 'obstoyatelstva@mail.ru',
      name: 'Обстоятельства',
      pass: await bcrypt.hash('123', 10),
      genre: 'Indie Pop, Alternative',
      photo: 'https://sun9-35.userapi.com/impg/iFeakWvFrAjBTlZLWL7wu3rxJZXij8MFFAXnmg/j__dinsM-l8.jpg?size=1920x1279&quality=96&sign=f0454cc64de26ac78082bd6fd5c858ec&type=album',
      info: 'Обстоятельства — дуэт Кости Максимова и Лёни Оливанова, созданный в Чебоксарах. Это музыка романтики десятых, холодного шарма родного города и постоянной тревоги, в которой живет сегодняшняя российская молодёжь.',
      instagram: 'obstoyatelstva',
      phone: '+7-916-352-94-72',
      vk: 'https://vk.com/obstoyatelstva',
      genre_id_fs: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {});
  },
};

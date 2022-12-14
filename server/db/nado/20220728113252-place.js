module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [{
      name: 'Китайский Летчик Джао Да',
      location: 'Лубянский проезд, дом 25, стр. 1',
      info: 'За 22 год существования «Китайский Летчик Джао Да» приобрел самую лучшую в мире репутацию. Его знают на Ямайке, в Бразилии, в Бенине, на островах Зеленого мыса, в Америке и, конечно же, по всей Европе. Во всех этих странах живут уникальные музыканты, побывавшие на сцене «Летчика» и навсегда ставшие друзьями клуба. Африканскую этнику сменял английский панк-рок, а французкие шансонье делили сцену с питерскими хулиганами. На сцене «Китайского Лётчика» проходят не только концерты, но и дискотеки, детские праздники, пресс-конференции. ',
      owner_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate({ Artist }) {
      this.hasMany(Artist, { foreignKey: 'genre_id_fs' });
    }
  }
  Genre.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};

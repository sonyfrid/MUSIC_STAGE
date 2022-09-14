const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    static associate({ Genre, Track, EventStatus }) {
      this.belongsTo(Genre, { foreignKey: 'genre_id_fs' });
      this.hasMany(Track, { foreignKey: 'artist_id' });
      this.hasMany(EventStatus, { foreignKey: 'artist_id' });
    }
  }
  Artist.init({
    mail: DataTypes.STRING,
    name: DataTypes.STRING,
    pass: DataTypes.TEXT,
    genre: DataTypes.STRING,
    photo: DataTypes.TEXT,
    info: DataTypes.TEXT,
    instagram: DataTypes.STRING,
    phone: DataTypes.STRING,
    vk: DataTypes.STRING,
    genre_id_fs: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};

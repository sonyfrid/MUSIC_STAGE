const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    static associate({ Genre }) {
      this.belongsTo(Genre, { foreignKey: 'artist_id' });
    }
  }
  Track.init({
    track: DataTypes.STRING,
    artist_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};

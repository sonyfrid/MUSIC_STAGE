const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Place }) {
      this.belongsTo(Place, { foreignKey: 'place_id' });
    }
  }
  Photo.init({
    photo: DataTypes.TEXT,
    place_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};

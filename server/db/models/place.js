const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    static associate({ Owner, Photo, Event }) {
      this.belongsTo(Owner, { foreignKey: 'owner_id' });
      this.hasMany(Photo, { foreignKey: 'place_id' });
      this.hasMany(Event, { foreignKey: 'place_id' });
    }
  }
  Place.init({
    name: DataTypes.STRING,
    location: DataTypes.TEXT,
    info: DataTypes.TEXT,
    owner_id: DataTypes.INTEGER,
    photo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};

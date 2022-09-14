const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ EventStatus, Type, Place }) {
      this.belongsTo(Type, { foreignKey: 'type_id' });
      this.belongsTo(Place, { foreignKey: 'place_id' });
      this.hasMany(EventStatus, { foreignKey: 'event_id' });
    }
  }
  Event.init({
    type_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    info: DataTypes.TEXT,
    place_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    link: DataTypes.TEXT,
    photo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventStatus extends Model {
    static associate({ Event, Artist }) {
      this.belongsTo(Event, { foreignKey: 'event_id' });
      this.belongsTo(Artist, { foreignKey: 'artist_id' });
    }
  }
  EventStatus.init({
    event_id: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    message: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'EventStatus',
  });
  return EventStatus;
};

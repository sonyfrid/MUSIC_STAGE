const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate({ Event }) {
      this.hasMany(Event, { foreignKey: 'type_id' });
    }
  }
  Type.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};

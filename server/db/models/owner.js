const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate({ Place }) {
      this.hasMany(Place, { foreignKey: 'owner_id' });
    }
  }
  Owner.init({
    mail: DataTypes.STRING,
    name: DataTypes.STRING,
    pass: DataTypes.TEXT,
    phone: DataTypes.STRING,
    photo: DataTypes.TEXT,
    telegram: DataTypes.STRING,
    instagram: DataTypes.STRING,
    info: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};

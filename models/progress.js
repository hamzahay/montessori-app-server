'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Progress.belongsTo(models.User)
    }
  };
  Progress.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    progress: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};
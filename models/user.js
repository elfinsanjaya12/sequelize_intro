'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    daerahId: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // relasi 
    User.belongsTo(sequelize.models.Daerah)
  };
  return User;
};
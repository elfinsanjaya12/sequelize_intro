'use strict';
module.exports = (sequelize, DataTypes) => {
  const Daerah = sequelize.define('Daerah', {
    nama: DataTypes.STRING
  }, {});
  Daerah.associate = function(models) {
    // associations can be defined here
    // one to many 1 daerah bisa dipakek banyak user
    Daerah.hasMany(sequelize.models.User) 
  };
  // hooks sebelum create di uppercase dlu
  Daerah.beforeCreate(daerah => {
    daerah.nama = daerah.nama.toUpperCase()
    return daerah
  })
  // hooks sesudah destroy daerah dia juga destroy user nya
  Daerah.afterDestroy(daerah => {
    return sequelize.models.User.destroy({
      where: {
        daerahId: daerah.id
      }
    })
  })
  return Daerah;
};
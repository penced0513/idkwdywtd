'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    owner: DataTypes.INTEGER,
    name: DataTypes.STRING,
    groupPic: DataTypes.TEXT
  }, {});
  Group.associate = function(models) {
    Group.belongsTo(models.User, { foreignKey: "owner"})
    Group.hasMany(models.GroupMember, { foreignKey: "groupId" })
  };
  return Group;
};

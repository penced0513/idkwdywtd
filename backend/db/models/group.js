'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    owner: DataTypes.INTEGER,
    name: DataTypes.STRING,
    groupPic: DataTypes.TEXT
  }, {});
  Group.associate = function(models) {
    const columnMapping = {
      as: 'groupMembers',
      through: "GroupMembers",
      foreignKey: "groupId",
      otherKey: "userId",
    }
    Group.belongsToMany(models.User, columnMapping)
    Group.belongsTo(models.User, { foreignKey: "owner"})
  };
  return Group;
};

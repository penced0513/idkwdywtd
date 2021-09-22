'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define('GroupMember', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  GroupMember.associate = function(models) {
    GroupMember.belongsTo(models.User, { foreignKey: "userId" })
    GroupMember.belongsTo(models.Group, { foreignKey: "groupId" })
  };
  return GroupMember;
};

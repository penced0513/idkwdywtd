'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    eventPic: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    totalCost: DataTypes.INTEGER,
    host: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) { 
    Event.belongsTo(models.User, { foreignKey: "host"})
    Event.hasMany(models.Attendee, { foreignKey: "eventId", onDelete: 'cascade', hooks:true })
  };
  return Event;
};

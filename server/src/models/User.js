module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    pledge: DataTypes.STRING
  })

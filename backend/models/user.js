module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Define attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // You can add more fields here
  });

  return User;
};

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    // Define attributes
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // You can add more fields like 'genre', 'description', 'publishedYear', etc.
  });

  return Book;
};

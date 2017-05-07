// Import MySQL connection.
var connection = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    burger: {
      type: DataTypes.STRING,
      allowNull: false
  }
    });
  return Post;
};

// Export the orm object for the model (burger.js).

module.exports = orm;

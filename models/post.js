module.exports = function(sequelize, DataTypes) {
	var Post = sequelize.define("Post", {
		title 	: DataTypes.STRING,
		content : DataTypes.TEXT
	}, {
		underscored: true
	})
	return Post
}
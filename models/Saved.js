const { DataTypes, Model } = require('sequelize');
const User = require('../models/User');

class Saved extends Model {}

Saved.init({
    saved_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    bodyPart: DataTypes.STRING,
    equipment: DataTypes.STRING,
    gifUrl: DataTypes.STRING,
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    target: DataTypes.STRING
}, {
    sequelize: require('../config/db_connection'),
    modelName: 'saved'
});

User.hasMany(Saved)

Saved.belongsTo(User)


module.exports = Saved;

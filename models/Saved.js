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


// bodyPart: "waist"
// equipment: "wheel roller"
// gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0857.gif"
// id: "0857"
// name: "wheel rollerout"
// target: "abs"
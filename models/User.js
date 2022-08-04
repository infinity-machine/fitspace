const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {};

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 3
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 6
        }
    }
}, {
    sequelize: require()
})
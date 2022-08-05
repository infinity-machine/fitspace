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
    sequelize: require('../config/connection'),
    modelName: 'user',
    hooks: {
        async beforeCreate(user) {
            const hashed_password = await bcrypt.hash(user.password, 10);
        }
    }
});

User.prototype.validatePassword = async function (password, stored_password) {
    return await bcrypt.compare(password, stored_password)
};

module.exports = User;
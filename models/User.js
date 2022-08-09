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
            len: {
                args: 4,
                msg: 'Your password must be at least 6 characters in length.'
            }
        }
    }
}, {
    sequelize: require('../config/db_connection'),
    modelName: 'user',
    hooks: {
        async beforeCreate(user) {
            const hashed_pass = await bcrypt.hash(user.password, 10);
            user.password = hashed_pass;
        }
    }
});

User.prototype.validatePassword = async function (password, stored_password) {
    return await bcrypt.compare(password, stored_password)
};

module.exports = User;
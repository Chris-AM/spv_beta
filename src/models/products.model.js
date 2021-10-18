const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db.config');

class Product extends Model { }

Product.init({
    codebar: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Product'
});

console.log('Is product connected?', Product === sequelize.models.Product);

module.exports = Product
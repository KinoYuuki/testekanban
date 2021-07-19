const Sequelize = require('sequelize');
const database = require('../../config/database');

const Card = database.define('cards', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lista: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Card;
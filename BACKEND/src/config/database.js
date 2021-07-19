require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize( global.process.env.DATABASE_DATABASE, global.process.env.DATABASE_USERNAME, global.process.env.DATABASE_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
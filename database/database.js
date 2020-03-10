const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','evolution',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection ;
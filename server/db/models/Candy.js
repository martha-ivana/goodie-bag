const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://ibb.co/7bz40y0'
    // can also be something like '../../../public/striped-candy.png'
  }
});

module.exports = Candy

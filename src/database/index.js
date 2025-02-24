const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const User = require ('../models/user');

const models = [User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
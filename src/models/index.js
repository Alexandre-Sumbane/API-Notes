import Sequelize from 'sequelize';
import databaseConfig from '../config/config';

import User from '../models/user';

const models = [User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

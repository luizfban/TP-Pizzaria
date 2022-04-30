import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import {
  Customer,
  Employee,
  Order,
  Product,
  OrderProducts,
  ProductPrices,
} from '../models';

require('dotenv/config');

const models = [
  Customer,
  Employee,
  Order,
  Product,
  OrderProducts,
  ProductPrices,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();

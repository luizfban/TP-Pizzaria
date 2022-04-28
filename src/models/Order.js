import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.FLOAT,
        status: {
          type: Sequelize.ENUM,
          values: ['PENDING', 'PROCESSING', 'COMPLETED', 'PAID'],
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer',
    });
  }
}

export default Order;

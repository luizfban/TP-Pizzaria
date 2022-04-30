import Sequelize, { Model } from 'sequelize';

class OrderProducts extends Model {
  static init(sequelize) {
    super.init(
      {
        quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.ProductPrices, {
      foreignKey: 'product_prices_id',
      as: 'product_prices',
    });

    this.belongsTo(models.Order, {
      foreignKey: 'order_id',
      as: 'order',
    });
  }
}

export default OrderProducts;

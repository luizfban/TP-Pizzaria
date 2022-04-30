import Sequelize, { Model } from 'sequelize';

class ProductPrices extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.FLOAT,
        size: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product',
    });
  }
}

export default ProductPrices;

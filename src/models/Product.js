import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        ingredients: Sequelize.ARRAY(Sequelize.STRING),
        price: Sequelize.FLOAT,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }
}

export default Product;
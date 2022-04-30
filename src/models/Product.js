import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        ingredients: Sequelize.ARRAY(Sequelize.STRING),
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

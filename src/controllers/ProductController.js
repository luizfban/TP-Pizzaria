import { Product, ProductPrices } from '../models';
import { validateProduct } from './validators/product';

class ProductController {
  async store(req, res) {
    const productErrors = validateProduct(req.body);
    if (productErrors) {
      return res.status(400).json({ errors: productErrors });
    }

    const { name, ingredients, prices = [] } = req.body;

    const product = await Product.create({ name, ingredients });

    prices.forEach(({ price, size }) => {
      ProductPrices.create({ product_id: product.id, size, price });
    });

    const returnProduct = {
      product,
      prices,
    };

    return res.status(201).json(returnProduct);
  }

  async showId(req, res) {
    const productPrices = await ProductPrices.findAll({
      where: { product_id: req.params.id },
      include: { model: Product, as: 'product' },
    });

    if (!productPrices || productPrices.length === 0) {
      return res.status(400).json({ error: "Product doesn't exists" });
    }

    const returnProducts = {};
    productPrices.forEach(({ product, price, size }) => {
      if (!returnProducts[product.id]) {
        returnProducts[product.id] = {
          ...product.dataValues,
          prices: [{ price, size }],
        };
      } else {
        returnProducts[product.id].prices.push({ price, size });
      }
    });

    return res.status(200).json(Object.values(returnProducts)[0]);
  }

  async showAll(req, res) {
    const returnProducts = {};
    const productPrices = await ProductPrices.findAll({
      include: { model: Product, as: 'product' },
    });

    productPrices.forEach(({ product, price, size }) => {
      if (!returnProducts[product.id]) {
        returnProducts[product.id] = {
          ...product.dataValues,
          prices: [{ price, size }],
        };
      } else {
        returnProducts[product.id].prices.push({ price, size });
      }
    });

    return res.status(200).json(Object.values(returnProducts));
  }

  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(400).json({ error: "Product doesn't exists" });
    }

    product.destroy();
    return res.status(200).json();
  }
}

export default new ProductController();

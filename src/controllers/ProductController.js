import { Product } from '../models';
import { validateProduct } from './validators/product';

class ProductController {
  async store(req, res) {
    const productErrors = validateProduct(req.body);
    if (productErrors) {
      return res.status(400).json({ errors: productErrors });
    }

    return res.status(201).json(await Product.create(req.body));
  }

  async showId(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(400).json({ error: "Product doesn't exists" });
    }

    return res.status(200).json(product);
  }
}

export default new ProductController();

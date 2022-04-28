import { Op } from 'sequelize';
import { Order, Product, OrderProducts, Customer } from '../models';
import { validateOrder } from './validators/order';

class OrderController {
  async store(req, res) {
    const orderErrors = validateOrder(req.body);
    if (orderErrors) {
      return res.status(400).json({ errors: orderErrors });
    }

    const { products, customerEmail } = req.body;
    const productIDs = products.map((i) => i.id);
    let customerId = 0;

    if (customerEmail) {
      const customer = await Customer.findOne({
        where: { email: customerEmail },
      });

      if (!customer) {
        return res.status(400).json({ error: 'customer does not exists' });
      }

      customerId = customer.id;
    }

    const allProducts = await Product.findAll({
      where: {
        id: {
          [Op.in]: productIDs,
        },
      },
    });

    if (allProducts.length != productIDs.length) {
      return res.status(400).json({ error: 'invalid product id' });
    }

    const price = allProducts.reduce((acc, curr) => acc + curr.price, 0);
    const order = await Order.create({
      price,
      customer_id: customerId ? customerId : null,
    });

    products.forEach(({ quantity, id }) => {
      OrderProducts.create({ quantity, product_id: id, order_id: order.id });
    });

    return res.status(201).json({ order, products: allProducts });
  }

  async showId(req, res) {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(400).json({ error: "Order doesn't exists" });
    }

    const orderProducts = await OrderProducts.findAll({
      where: { order_id: order.id },
      include: { model: Product, as: 'product' },
    });

    return res.status(200).json({
      id: order.id,
      price: order.price,
      status: order.status,
      createdAt: order.createdAt,
      products: orderProducts.map((i) => i.product),
    });
  }
}

export default new OrderController();

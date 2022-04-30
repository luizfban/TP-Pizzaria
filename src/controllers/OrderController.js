import { Op } from 'sequelize';
import {
  Order,
  Product,
  OrderProducts,
  Customer,
  ProductPrices,
} from '../models';
import { validateOrder, validateStatus } from './validators/order';

const STATUS = {
  0: 'PENDING',
  1: 'PROCESSING',
  2: 'COMPLETED',
  3: 'PAID',
};

class OrderController {
  async store(req, res) {
    const orderErrors = validateOrder(req.body);
    if (orderErrors) {
      return res.status(400).json({ errors: orderErrors });
    }

    const { products, customerEmail } = req.body;
    const productInfo = {};
    const productIDs = products.map((i) => {
      productInfo[i.id] = { id: i.id, quantity: i.quantity, size: i.size };
      return i.id;
    });

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

    const allProducts = await ProductPrices.findAll({
      where: {
        product_id: {
          [Op.in]: productIDs,
        },
      },
      include: { model: Product, as: 'product' },
    });

    const allProductsMap = {};
    allProducts.forEach(({ id, product_id, size, price, product }) => {
      const data = productInfo[product_id];
      if (data && data.size === size) {
        allProductsMap[product_id] = {
          ...data,
          size,
          price,
          product,
          price_id: id,
        };
      }
    });

    const arrProductsMap = Object.values(allProductsMap);
    if (arrProductsMap.length != productIDs.length) {
      return res.status(400).json({ error: 'invalid product id' });
    }

    const price = arrProductsMap.reduce((acc, curr) => {
      return acc + curr.price * productInfo[curr.id].quantity || 1;
    }, 0);

    const order = await Order.create({
      price,
      customer_id: customerId ? customerId : null,
    });

    products.forEach(({ quantity, id }) => {
      OrderProducts.create({
        quantity,
        product_prices_id: allProductsMap[id].price_id,
        order_id: order.id,
      });
    });

    return res.status(201).json({ order, products: arrProductsMap });
  }

  async showAll(req, res) {
    const returnOrders = {};
    const orderProducts = await OrderProducts.findAll({
      include: [
        {
          model: ProductPrices,
          as: 'product_prices',
          include: { model: Product, as: 'product' },
        },
        { model: Order, as: 'order' },
      ],
    });

    orderProducts.forEach(({ order, product_prices, quantity }) => {
      if (!returnOrders[order.id]) {
        returnOrders[order.id] = { order, products: [] };
      }

      returnOrders[order.id].products.push({
        ...product_prices.product.dataValues,
        quantity,
        prices: product_prices.dataValues,
      });
    });

    return res.status(200).json(Object.values(returnOrders));
  }

  async updateStatus(req, res) {
    const { status } = req.body;

    const statusError = validateStatus(status);
    if (statusError) {
      return res.status(400).json({ errors: statusError });
    }

    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(400).json({ error: "Order doesn't exists" });
    }

    order.status = STATUS[status];
    order.update({ status: order.status });
    return res.status(200).json(order);
  }
}

export default new OrderController();

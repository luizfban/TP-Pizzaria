import { Customer } from '../models';

class CustomerController {
  async store(req, res) {
    const customerExists = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (customerExists) {
      return res.status(400).json({ error: 'Customer already exists' });
    }

    const customer = await Customer.create(req.body);
    return res.status(201).json(customer);
  }
}

export default new CustomerController();

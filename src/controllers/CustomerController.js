import { Customer } from '../models';
import { validateCustomer } from './validators/customer';

class CustomerController {
  async store(req, res) {
    const customerErrors = validateCustomer(req.body);
    if (customerErrors) {
      return res.status(400).json({ errors: customerErrors });
    }

    const customerExists = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (customerExists) {
      return res.status(400).json({ error: 'customer already exists' });
    }

    const customer = await Customer.create(req.body);
    return res.status(201).json(customer);
  }

  async showId(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(400).json({ error: "customer doesn't exists" });
    }

    return res.status(200).json(customer);
  }
}

export default new CustomerController();

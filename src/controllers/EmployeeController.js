import { Employee } from '../models';
import { validateEmployee } from './validators/employee';

class EmployeeController {
  async store(req, res) {
    const employeeErrors = validateEmployee(req.body);
    if (employeeErrors) {
      return res.status(400).json({ errors: employeeErrors });
    }

    const employeeExists = await Employee.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (employeeExists) {
      return res.status(400).json({ error: 'employee already exists' });
    }

    const employee = await Employee.create(req.body);
    return res.status(201).json(employee);
  }

  async showId(req, res) {
    const employee = await Employee.findByPk(req.params.id);

    if (!employee) {
      return res.status(400).json({ error: "emloyee doesn't exists" });
    }

    return res.status(200).json(employee);
  }
}

export default new EmployeeController();

import jwt from 'jsonwebtoken';

import { Employee } from '../models';
import authConfig from '../config/auth';

class AuthController {
  async store(req, res) {
    const { email = '', password } = req.body;

    const employee = await Employee.findOne({ where: { email } });
    if (!employee) {
      return res.status(401).json({ error: 'Employee does not exists' });
    }

    if (!(await employee.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, admin, createdAt, updatedAt } = employee;
    return res.status(200).json({
      employee: {
        id,
        name,
        email,
        admin,
        createdAt,
        updatedAt,
      },

      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new AuthController();

import jwt from 'jsonwebtoken';

import { Employee } from '../models';

import { promisify } from 'util';
import authConfig from '../config/auth';

export default (requiresAuth = true) =>
  async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader && requiresAuth) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    if (!requiresAuth) {
      return next();
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);
      req.userId = decoded.id;

      const employee = Employee.findByPk(req.userId);
      if (!employee) {
        return res.status(401).json({ error: 'invalid token' });
      }

      return next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };

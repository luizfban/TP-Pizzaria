import { Router } from 'express';

import { Customer } from './controllers';

const routes = new Router();

routes.post('/signup', Customer.store);

export default routes;

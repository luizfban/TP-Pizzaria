import { Router } from 'express';

import { Customer, Employee } from './controllers';

const routes = new Router();

routes.post('/signup', Customer.store);
routes.get('/customer/:id', Customer.showId);

routes.post('/add-employee', Employee.store);
routes.get('/employee/:id', Employee.showId);

export default routes;

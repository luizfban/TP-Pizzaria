import { Router } from 'express';

import { Customer, Employee, Auth, Product, Order } from './controllers';
// import { auth } from './middlewares';

const routes = new Router();

routes.post('/signup', Customer.store);
routes.get('/customer/:id', Customer.showId);

routes.post('/add-employee', Employee.store);
routes.get('/employee/:id', Employee.showId);

routes.post('/login', Auth.store);

routes.post('/product', Product.store);
routes.get('/product/:id', Product.showId);
routes.get('/products', Product.showAll);

routes.post('/order', Order.store);
routes.get('/order/:id', Order.showId);

export default routes;

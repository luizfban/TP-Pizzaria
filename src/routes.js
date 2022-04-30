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
routes.delete('/product/:id', Product.delete);
routes.get('/product/:id', Product.showId);
routes.get('/products', Product.showAll);
routes.post('/products-seed', Product.createSeeds);

routes.post('/order', Order.store);
routes.get('/orders', Order.showAll);
routes.put('/order/:id', Order.updateStatus);

export default routes;

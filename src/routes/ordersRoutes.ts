import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const routes = Router();
const ordersController = new OrdersController();

const { getAll } = ordersController;

routes.get('/orders', getAll);

export default routes;

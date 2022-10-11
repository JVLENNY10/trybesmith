import { Router } from 'express';
import UsersMiddlewares from '../middlewares/UsersMiddlewares';
import OrdersController from '../controllers/OrdersController';
import OrdersMiddlewares from '../middlewares/OrdersMiddlewares';

const routes = Router();
const usersMiddlewares = new UsersMiddlewares();
const ordersController = new OrdersController();
const ordersMiddlewares = new OrdersMiddlewares();

const { checkToken } = usersMiddlewares;
const { create, getAll } = ordersController;
const { checkProductsIds } = ordersMiddlewares;

routes.get('/orders', getAll);
routes.post('/orders', checkToken, checkProductsIds, create);

export default routes;

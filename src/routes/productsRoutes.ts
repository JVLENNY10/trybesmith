import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import ProductsMiddlewares from '../middlewares/ProductsMiddlewares';

const routes = Router();
const productsController = new ProductsController();
const productsMiddlewares = new ProductsMiddlewares();

const { create, getAll } = productsController;
const { checkName, checkAmount } = productsMiddlewares;

routes.get('/products', getAll);
routes.post('/products', checkName, checkAmount, create);

export default routes;

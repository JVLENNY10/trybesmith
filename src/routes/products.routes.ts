import { Router } from 'express';
import { getAll, create } from '../controllers/products.controllers';
import { checkName, checkAmount } from '../middlewares/products.middlewares';

const routes = Router();

routes.get('/products', getAll);
routes.post('/products', checkName, checkAmount, create);

export default routes;

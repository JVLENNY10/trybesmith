import { Router } from 'express';
import getAll from '../controllers/orders.controllers';

const routes = Router();

routes.get('/orders', getAll);

export default routes;

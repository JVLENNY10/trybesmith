import { Router } from 'express';
import getAll from '../controllers/products.controllers';

const routes = Router();

routes.get('/', getAll);

export default routes;

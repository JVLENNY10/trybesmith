import { Router } from 'express';
import create from '../controllers/users.controllers';

import {
  checkUserName,
  checkClasse,
  checkLevel,
  checkPassword,
} from '../middlewares/users.middlewares';

const routes = Router();

routes.post('/users', checkUserName, checkClasse, checkLevel, checkPassword, create);

export default routes;

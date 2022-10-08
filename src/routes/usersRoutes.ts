import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UsersMiddlewares from '../middlewares/UsersMiddlewares';

const routes = Router();
const usersController = new UsersController();
const usersMiddlewares = new UsersMiddlewares();

const { create } = usersController;
const { checkUserName, checkClasse, checkLevel, checkPassword } = usersMiddlewares;

routes.post('/users', checkUserName, checkClasse, checkLevel, checkPassword, create);

export default routes;

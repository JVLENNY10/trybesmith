import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UsersMiddlewares from '../middlewares/UsersMiddlewares';

const routes = Router();
const usersController = new UsersController();
const usersMiddlewares = new UsersMiddlewares();

const { create, login } = usersController;
const { checkClasse, checkLevel, checkLogin, checkPassword, checkUsername } = usersMiddlewares;

routes.post('/login', checkPassword, checkUsername, checkLogin, login);
routes.post('/users', checkClasse, checkLevel, checkPassword, checkUsername, create);

export default routes;

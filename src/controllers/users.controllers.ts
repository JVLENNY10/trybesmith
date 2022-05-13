import { Request, Response } from 'express';
import UsersServices from '../services/users.services';

const create = async (req: Request, res: Response): Promise<Response> => {
  const services = new UsersServices();
  const newProduct = await services.create(req.body);
  return res.status(201).json(newProduct);
};

export default create;

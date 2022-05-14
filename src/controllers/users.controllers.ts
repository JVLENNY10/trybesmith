import { Request, Response } from 'express';
import UsersServices from '../services/users.services';
import jwtGenerator from '../jwt/jwtGenerator';

const create = async (req: Request, res: Response): Promise<Response> => {
  const services = new UsersServices();
  const newUsers = await services.create(req.body);
  const token = jwtGenerator({ id: newUsers.id, username: newUsers.username });

  return res.status(201).json({ token });
};

export default create;

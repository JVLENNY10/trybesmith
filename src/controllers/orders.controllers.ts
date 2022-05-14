import { Request, Response } from 'express';
import OrdersServices from '../services/orders.services';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const services = new OrdersServices();
  const orders = await services.getAll();
  return res.status(200).json(orders);
};

export default getAll;

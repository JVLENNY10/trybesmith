import { Request, Response } from 'express';
import ProductsServices from '../services/products.services';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const services = new ProductsServices();
  const products = await services.getAll();
  return res.status(200).json(products);
};

export default getAll;

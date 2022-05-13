import { Request, Response } from 'express';
import ProductsServices from '../services/products.services';

export const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const services = new ProductsServices();
  const products = await services.getAll();
  return res.status(200).json(products);
};

export const create = async (req: Request, res: Response): Promise<Response> => {
  const services = new ProductsServices();
  const newProduct = await services.create(req.body);
  return res.status(201).json(newProduct);
};

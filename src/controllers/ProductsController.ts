import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';

class ProductsController {
  private productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const infos = req.body;
    const newProduct = await this.productsService.create(infos);
    return res.status(201).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.productsService.getAll();
    return res.status(200).json(products);
  };
}

export default ProductsController;

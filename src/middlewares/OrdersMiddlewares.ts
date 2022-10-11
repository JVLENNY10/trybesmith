import { Request, Response, NextFunction } from 'express';

class OrdersMiddlewares {
  public checkProductsIds = (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;

    if (!productsIds) {
      return res.status(400).json({ message: '"productsIds" is required' });
    }

    if (Array.isArray(productsIds) === false) {
      return res.status(422).json({ message: '"productsIds" must be an array' });
    }

    if (productsIds.length === 0) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }

    next();
  };
}

export default OrdersMiddlewares;

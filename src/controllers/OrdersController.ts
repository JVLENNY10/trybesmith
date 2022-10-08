import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';

class OrdersController {
  private ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.ordersService.getAll();
    return res.status(200).json(orders);
  };
}

export default OrdersController;

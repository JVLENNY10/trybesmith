import { Request, Response } from 'express';
import JwtHelpers from '../helpers/JwtHelpers';
import { IToken } from '../interfaces/usersInterface';
import OrdersService from '../services/OrdersService';

class OrdersController {
  private jwtHelpers: JwtHelpers;

  private ordersService: OrdersService;

  constructor() {
    this.jwtHelpers = new JwtHelpers();
    this.ordersService = new OrdersService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { productsIds } = req.body;
    const token = req.headers.authorization as string;

    const { data: { id: userId } } = this.jwtHelpers.decoder(token) as IToken;
    await this.ordersService.create(userId, productsIds);

    return res.status(201).json({ userId, productsIds });
  };

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.ordersService.getAll();
    return res.status(200).json(orders);
  };
}

export default OrdersController;

import OrdersModels from '../models/orders.models';
import IOrders from '../interfaces/orders.interface';

class OrdersServices {
  private models: OrdersModels;

  constructor() {
    this.models = new OrdersModels();
  }

  public getAll = async (): Promise<IOrders[]> => {
    const orders = await this.models.getAll();
    return orders;
  };
}

export default OrdersServices;

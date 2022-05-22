import { Pool } from 'mysql2/promise';

import connection from './connection';
import IOrders from '../interfaces/orders.interface';

class OrdersModels {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  private getAll = async (): Promise<IOrders[]> => {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders;');
    return orders as IOrders[];
  };
}

export default OrdersModels;

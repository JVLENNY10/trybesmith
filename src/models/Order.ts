import { Pool } from 'mysql2/promise';

import connection from './connection';
import IOrders from '../interfaces/ordersInterface';

class Order {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrders[]> => {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders;');
    return orders as IOrders[];
  };
}

export default Order;

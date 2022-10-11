import { Pool, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IOrders from '../interfaces/ordersInterface';

class Order {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (userId: number): Promise<number> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Orders (userId) VALUES (?);
    `, [userId]);

    return insertId;
  };

  public getAll = async (): Promise<IOrders[]> => {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders;');
    return orders as IOrders[];
  };
}

export default Order;

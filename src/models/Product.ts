import { Pool, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IProducts from '../interfaces/productsInterface';

class Product {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (infos: IProducts): Promise<number> => {
    const { name, amount } = infos;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);
    `, [name, amount]);

    return insertId;
  };

  public getAll = async (): Promise<IProducts[]> => {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products;');
    return products as IProducts[];
  };
}

export default Product;

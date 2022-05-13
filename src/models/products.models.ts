import { Pool, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IProducts from '../interfaces/products.interface';

class ProductsModels {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProducts[]> => {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as IProducts[];
  };

  public create = async (product: IProducts): Promise<IProducts> => {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
    `, [name, amount]);

    return { id: insertId, ...product };
  };
}

export default ProductsModels;

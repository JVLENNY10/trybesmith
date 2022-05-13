import { Pool } from 'mysql2/promise';
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
}

export default ProductsModels;
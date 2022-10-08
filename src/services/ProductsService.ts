import Product from '../models/Product';
import IProducts from '../interfaces/productsInterface';

class ProductsService {
  private productModel: Product;

  constructor() {
    this.productModel = new Product();
  }

  public create = async (infos: IProducts): Promise<IProducts> => {
    const id = await this.productModel.create(infos);
    return { id, ...infos };
  };

  public getAll = async (): Promise<IProducts[]> => {
    const products = await this.productModel.getAll();
    return products;
  };
}

export default ProductsService;

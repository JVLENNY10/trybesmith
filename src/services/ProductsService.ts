import Product from '../models/Product';
import IProducts from '../interfaces/productsInterface';

class ProductsService {
  private productModel: Product;

  constructor() {
    this.productModel = new Product();
  }

  public create = async (infos: IProducts): Promise<IProducts> => {
    const newProduct = await this.productModel.create(infos);
    return newProduct;
  };

  public getAll = async (): Promise<IProducts[]> => {
    const products = await this.productModel.getAll();
    return products;
  };

  public update = async (orderId: number, id: number) => this.productModel.update(orderId, id);
}

export default ProductsService;

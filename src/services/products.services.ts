import ProductsModels from '../models/products.models';
import IProducts from '../interfaces/products.interface';

class ProductsServices {
  private models: ProductsModels;

  constructor() {
    this.models = new ProductsModels();
  }

  public getAll = async (): Promise<IProducts[]> => {
    const products = await this.models.getAll();
    return products;
  };

  public create = async (product: IProducts): Promise<IProducts> => {
    const newProduct = await this.models.create(product);
    return newProduct;
  };
}

export default ProductsServices;

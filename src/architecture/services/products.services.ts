import ProductsModels from '../models/products.model';
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
}

export default ProductsServices;

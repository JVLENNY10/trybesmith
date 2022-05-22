import OrdersModels from '../models/orders.models';
import ProductsModels from '../models/products.models';
import IOrders from '../interfaces/orders.interface';

class OrdersServices {
  private ordersModels: OrdersModels;

  private productsModels: ProductsModels;

  constructor() {
    this.ordersModels = new OrdersModels();
    this.productsModels = new ProductsModels();
  }

  public getAll = async (): Promise<IOrders[]> => {
    const ordersModels = await this.ordersModels.getAll();
    const productsModels = await this.productsModels.getAll();

    const result = ordersModels.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: productsModels
        .filter((product) => product.orderId === order.id)
        .map((product) => product.id),
    }));

    return result;
  };
}

export default OrdersServices;

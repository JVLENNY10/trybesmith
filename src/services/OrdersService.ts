import Order from '../models/Order';
import ProductsService from './ProductsService';
import IOrders from '../interfaces/ordersInterface';

class OrdersService {
  private orderModel: Order;

  private productsService: ProductsService;

  constructor() {
    this.orderModel = new Order();
    this.productsService = new ProductsService();
  }

  public getAll = async (): Promise<IOrders[]> => {
    const orders = await this.orderModel.getAll();
    const products = await this.productsService.getAll();

    return orders.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: products
        .filter((product) => product.orderId === order.id)
        .map((product) => product.id),
    }));
  };
}

export default OrdersService;

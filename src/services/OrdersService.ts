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

  public create = async (userId: number, productsIds: Array<number>) => {
    const orderId = await this.orderModel.create(userId);

    await Promise.all(
      productsIds.map(async (productId: number) => {
        await this.productsService.update(orderId, productId);
      }),
    );
  };

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

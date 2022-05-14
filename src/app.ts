import express from 'express';
import usersRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(usersRoutes);
app.use(ordersRoutes);

export default app;
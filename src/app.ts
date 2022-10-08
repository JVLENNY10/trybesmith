import express from 'express';
import usersRoutes from './routes/usersRoutes';
import ordersRoutes from './routes/ordersRoutes';
import productsRoutes from './routes/productsRoutes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(usersRoutes);
app.use(ordersRoutes);

export default app;

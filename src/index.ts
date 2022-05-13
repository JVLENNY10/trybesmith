import app from './app';
import productsRoutes from './routes/products.routes';

const PORT = 3000;

app.use(productsRoutes);

const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

export default server;
